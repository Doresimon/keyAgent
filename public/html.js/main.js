// Vue.use(ElementUI);
// var encrypted = CryptoJS.SHA256('123');
// console.log(encrypted)
// console.log(encrypted.toString())

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
            passpass:'',
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
        // setting:{
        //     register:{
        //         status:1,
        //     },
        //     login:{
        //         status:0,
        //     },
        //     changePass:{
        //         status:0,
        //     },
        //     getTip:{
        //         status:0,
        //     },
        // },
        // current:'register',
        // statusMap:{
        //     0:"wait",
        //     1:"process",
        //     2:"finish",
        //     3:"error",
        //     4:"success",
        // }
    },
    methods:{
        Register(){
        //     "UserName":             {"UN:roy"},
        // "UserPasswordHash":     {hash},
        // "ChangePasswordPolicy": {"(UN:roy AND ZS:shuai AND ZS:hei AND SFZ:678987000236787654 AND SJ:17317301908)"},
        // "GetTipPolicy":         {"(UN:roy AND SFZ:678987000236787654 AND SJ:17317301908)"},
        // "GetTipMessage":        {"shuai & hei"},
        // "UserAttributes":       {"UN:roy,SFZ:678987000236787654,SJ:17317301908,YX:zry_nuaa@897.com,ZS:shuai,ZS:hei"},
            let passHash = CryptoJS.SHA256(this.user.pass).toString()
            let attrs = []
            let tips = []
            attrs.push(`UN:${this.user.name}`)
            attrs.push(`SFZ:${this.user.SFZ}`)
            attrs.push(`SJ:${this.user.SJ}`)
            attrs.push(`YX:${this.user.YX}`)
            this.user.policy.tip = `${attrs.join(' AND ')}`
            for (let i = 0; i < this.user.attr.length; i++) {
                const e = this.user.attr[i];
                attrs.push(`ZS:${e}`)
                tips.push(`${e}`)
            }
            this.user.policy.pass = `${attrs.join(' AND ')}`

            let _Post = {
                UserName:`UN:${this.user.name}`,
                UserPasswordHash:passHash,
                ChangePasswordPolicy:`(${this.user.policy.pass})`,
                GetTipPolicy:`(${this.user.policy.tip})`,
                GetTipMessage:tips.join(' & '),
                UserAttributes:attrs.join(','),
            }

            // data post here
            console.log(_Post)

            axios.post('/signup', _Post)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        },

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
        },

        confirmPass(){
            if (this.user.pass!=''&&
                this.user.passpass!=''&&
                !(this.user.pass===this.user.passpass)) {
                this.$notify.error({
                    title: '密码不一致',
                    message: '两次输入的密码不同, 请重新输入.'
                });
            }
        },
    },
    computed:{
        // 仅读取
        canSubmit() {
            let ok = true
            ok = ok && this.user.name!=''
            ok = ok && this.user.pass!=''
            ok = ok && this.user.passpass!=''
            ok = ok && this.user.SFZ!=''
            ok = ok && this.user.SJ!=''
            ok = ok && this.user.YX!=''

            ok = ok && (this.user.pass===this.user.passpass)

            return ok
        },
    }
  })