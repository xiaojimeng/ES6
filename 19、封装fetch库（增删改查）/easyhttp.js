class EasyHttp {
  // 请求get
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url).then(res => res.json()
        .then(data => resolve(data))
        .catch(err => reject(err)))
    })
  }
  // 发送post
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json()
        .then(data => resolve(data))
        .catch(err => reject(err)))
    })
  }
  // 更新put
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json()
        .then(data => resolve(data))
        .catch(err => reject(err)))
    })
  }
  // 删除delete
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json'
        },
      }).then(res => res.json()
        .then(data => resolve("数据删除成功"))
        .catch(err => reject(err)))
    })
  }

}