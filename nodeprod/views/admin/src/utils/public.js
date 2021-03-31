export default {
    timeTrans(time) {
        if (!time){
            return
        }
        if(time.indexOf('T')!==-1){
            let d = new Date(time);
            let Y = d.getFullYear()
            let M = d.getMonth() + 1
            M = M < 10 ? "0" + M : M
            let D = d.getDate()
            D = D < 10 ? "0" + D : D
            let h = d.getHours()
            h = h < 10 ? "0" + h : h
            let m = d.getMinutes()
            m = m < 10 ? "0" + m : m
            let s = d.getSeconds()
            s = s < 10 ? "0" + s : s
            return `${Y}-${M}-${D} ${h}:${m}:${s}`
        }

        let date = new Date(Number(time + '000'))
        let Y = date.getFullYear()
        let M = date.getMonth() + 1
        M = M < 10 ? "0" + M : M
        let D = date.getDate()
        D = D < 10 ? "0" + D : D
        let h = date.getHours()
        h = h < 10 ? "0" + h : h
        let m = date.getMinutes()
        m = m < 10 ? "0" + m : m
        let s = date.getSeconds()
        s = s < 10 ? "0" + s : s

        return `${Y}-${M}-${D} ${h}:${m}:${s}`
    }
}