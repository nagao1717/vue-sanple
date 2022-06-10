{//3-3
// Vue.createApp({
//     data() {
//         return {
//             result:'',
//         };
//     },
//     methods: {
//         onmousein(e) {
//             this.result += 'Enter:'+e.target.id+'<br>';
//         },
//         onmouseout(e) {
//             this.result += 'Leave:${e.target.id}<br>';
//         }
//     }
// }).mount('#app');
}

{//3-4
// Vue.createApp({
//     data() {
//         return {
//             path:'images/about-img.png',
//         };
//     },
//     methods: {
//         onerror(){
//             this.path = 'images/blog-img.png';
//         },
//     }
// }).mount('#app');
}

{//3-5
// Vue.createApp({
//     methods: {
//         onclick(e){
//             console.log(e.type);
//         },
//     }
// }).mount('#app');
}

{//3-6
Vue.createApp({
    data() {
        return {
            myName:'太郎',
        };
    },
    methods: {
        onclick(e){
            console.log(e.type);
        },
    }
}).mount('#app');
}