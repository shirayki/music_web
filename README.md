# Music Player

## 云部署
1、fork  
2、登录 [vercel](https://vercel.com/)  
3、添加新项目，选择刚才fork的仓库  
4、展开<kbd>Environment Variables</kbd> 选项卡，添加环境变量  

```
VITE_APP_QQList = false       // 是否显示音乐榜单按钮
VITE_APP_TITLE = '音乐播放'    // 网站标题
VITE_APP_MUSIC_API = ''       // 音乐API
VITE_APP_MUSIC_LYRIC_API = '' // 歌词API
VITE_APP_MUSIC_LIST_API = ''  // 榜单API
VITE_APP_MUSIC_ICON_LINK = '' // 网站图标链接
```
5、<kbd>Deploy</kbd>

## 本地部署   
1、克隆  
2、```npm install```  
3、修改配置文件<kbd>.env</kbd>   
```
VITE_APP_QQList = false       // 是否显示音乐榜单按钮
VITE_APP_TITLE = '音乐播放'    // 网站标题
VITE_APP_MUSIC_API = ''       // 音乐API
VITE_APP_MUSIC_LYRIC_API = '' // 歌词API
VITE_APP_MUSIC_LIST_API = ''  // 榜单API
VITE_APP_MUSIC_ICON_LINK = '' // 网站图标链接
```
4、```npm run build```  
5、```npm run preview -- --host --port 端口```  
