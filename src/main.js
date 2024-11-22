import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faSearch,       // 搜索
    faDownload,     // 下载
    faTrash,        // 删除
    faPlay,         // 播放
    faPause,        // 暂停
    faStepForward,  // 下一首
    faStepBackward, // 上一首
    faRandom,       // 随机播放
    faRedo,          // 单曲循环
    faVolumeMute, 
    faVolumeDown, 
    faVolumeUp,
    faChevronDown,
    faAngleDown,
    faAngleUp    
  } from '@fortawesome/free-solid-svg-icons';

  library.add(faSearch, faDownload, faTrash, faPlay, faPause, faStepForward, faStepBackward, faRandom, faRedo,faVolumeMute, 
    faVolumeDown, 
    faVolumeUp,
    faChevronDown,
    faAngleDown,
    faAngleUp);
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');