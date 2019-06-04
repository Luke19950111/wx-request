
// 1.封装，写在utils目录下的http.js文件中
function getPromise(url, data, method){
    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            data: data,
            method: method,
            // header: {}, // 设置请求的 header
            success: function(res){
                resolve(res.data)
            },
            fail: function(err) {
                reject(err)
            },
            complete: function() {
                // complete
            }
        })
    })
}

const http = {
    get: function(url, data){
        return getPromise(url, data, 'GET')
    },
    post: function(url, data){
        return getPromise(url, data, 'POST')
    },
    put: function(url, data){
        return getPromise(url, data, 'PUT')
    },
    delete: function(url, data){
        return getPromise(url, data, 'DELETE')
    }
}

// 2.使用，在每个page的js中引入http直接使用
http.get(url, data).then()
http.post(url, data).then()
http.put(url, data).then()
http.delete(url, data).then()