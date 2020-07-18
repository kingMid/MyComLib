var Mylib =(function(){
    return {
        extend:function Fnextend(target,source){
            for(e in source){
                target[e]=source[e];
                if(typeof source[e]==='Object'){
                    target[e]= Fnextend({},source[e]);
                }
            }
            return target
        }
    };
})();
