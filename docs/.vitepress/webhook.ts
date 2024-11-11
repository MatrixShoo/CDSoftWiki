import axios from 'axios'

interface UpdatedFile {
  path: string
  title: string
  description?: string
}

interface NotificationConfig {
  webhookUrl: string
  botKey: string
  siteUrl: string
  updatedFiles: UpdatedFile[]
}

export async function sendNotification(config: NotificationConfig) {
  const { webhookUrl, botKey, siteUrl, updatedFiles } = config

  try {
    // 构建更新文件列表的 markdown 内容
    const filesList = updatedFiles
      .map(file => {
        // 移除开头的斜杠（如果有）
        const cleanPath = file.path.replace(/^\//, '')
        const url = `${siteUrl}/${encodeURIComponent(cleanPath.replace('.md', '.html'))}`
        
        // 生成文件标题
        const title = file.title || cleanPath.replace('.md', '')
        
        // 生成文件描述，如果有描述则加入
        const description = file.description ? `描述: ${file.description}` : ''

        return {
          title: title,
          description: description,
          url: url,
          picUrl: 'https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/wp-content/uploads/2024/01/symbol.svg', // 图片
        }
      })

    // 生成最终的图文消息格式
    const timestamp = new Date().toISOString()

    const message = {
      msgtype: 'news',
      news: {
        articles: [
          {
            title: '文档更新通知',
            description: `更新时间: **${timestamp}**`,
            url: siteUrl,
            picurl: 'https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/wp-content/uploads/2024/01/symbol.svg' // 头图
          },
          ...filesList.map(file => ({
            title: file.title,
            description: file.description,
            url: file.url,
            picurl: file.picUrl || 'https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/wp-content/uploads/2024/01/symbol.svg',
          }))
        ]
      }
    }

    // 发送消息到企业微信
    await axios.post(`${webhookUrl}?key=${botKey}`, message)
    console.log('已成功推送图文消息到企业微信')
  } catch (error) {
    if (error.response) {
      console.error('推送通知失败:', error.response.data)
    } else if (error.request) {
      console.error('没有收到响应:', error.request)
    } else {
      console.error('发送请求时出错:', error.message)
    }
  }
}
