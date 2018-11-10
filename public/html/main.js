// Vue.use(ElementUI);

var app = new Vue({
    el: '#app',
    data: {
        info:{
            header: 'ABE Password Platform',
            footer: '@Copyright by Blockchain Lab @Fudan University'
        },
        user:{
            name:'',
            pass:'',
            tip:'',
            policy:{
                tip:'',
                pass:''
            },
            attr:[],
        }
    }
  })