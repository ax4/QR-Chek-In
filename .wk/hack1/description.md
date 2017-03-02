# Hack 1

## Problem
Defined data-structure of student's check-in data is pretty straight-forward: 
```json
{
    "some-unique-id":{
        "from": "String: from whom you sign-in with", 
        "qr" : "String: a unique string, provided by your QR code", 
        "time": "Number: the cloud timestamp on the server side"
    }
}
```


For example, we have students' check-in data as follow: 
```json
{
  "-KeFRwFiZSxOA7lm6cVP": {
    "from": "from_who",
    "qr": "http://weixin.qq.com/r/some-two-qr-code",
    "time": 1488482191705
  },
  "-KeFRwOX5xz_3319g-2y": {
    "from": "from_who",
    "qr": "http://weixin.qq.com/r/some-two-qr-code",
    "time": 1488482191724
  },
  "-KeFRwWZpgA1-k-alGu1": {
    "from": "from_who",
    "qr": "http://weixin.qq.com/r/some-two-qr-code",
    "time": 1488482191732
  },
  "-KeFRwWZpgA1-k-alGu1": {
    "from": "from_who",
    "qr": "http://weixin.qq.com/r/some-one-qr-code",
    "time": 1488482191756
  }

}
```

However, this data set contains students with duplicated check-in. We need to unique the data, and output should be as follow: 
```json
[
    {
        "qr": "http://weixin.qq.com/r/some-one-qr-code", 
        "first-sign-in": 1488482191705
    },
    {
        "qr": "http://weixin.qq.com/r/some-one-qr-code", 
        "first-sign-in": 1488482191756
    }
]
```
Please provide your algorithm, to generate a unique array as described. 


## Possible Reference
[JS数据去重方法](https://annatarhe.github.io/2016/12/21/some-diff-filter-method.html)