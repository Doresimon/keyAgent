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
            SFZ:'',
            SJ:'',
            YX:'',
            tip:'',
            policy:{
                tip:'',
                pass:''
            },
            attr:[],
            a:[],
        },
        newAttr:{
            show:false,
            value:'',
        },
        setting:{
            register:{
                status:1,
            },
            login:{
                status:0,
            },
            changePass:{
                status:0,
            },
            getTip:{
                status:0,
            },
        },
        current:'register',
        statusMap:{
            0:"wait",
            1:"process",
            2:"finish",
            3:"error",
            4:"success",
        }
    },
    methods:{
        changePanel(step){
            for (const key in this.setting) {
                const e = this.setting[key];
                e.status = 0
            }
            this.setting[step].status = 1
            this.current = step
        },

        delAttr(attr) {
            this.user.attr.splice(this.user.attr.indexOf(attr), 1);
        },

        showInput() {
            this.newAttr.show = true;
            this.$nextTick(_ => {
                this.$refs.save.$refs.input.focus();
            });
        },

        handleInputConfirm() {
            let v = this.newAttr.value;
            if (v&&this.user.attr.indexOf(v)==-1) {
                this.user.attr.push(v);
            }
            this.newAttr.show = false;
            this.newAttr.value = '';
        }
    }
  })