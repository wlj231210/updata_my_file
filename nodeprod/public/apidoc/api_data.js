define({ "api": [
  {
    "type": "get",
    "url": "/user/getuserinfo",
    "title": "获取用户信息",
    "description": "<p>获取用户信息</p>",
    "name": "getuserinfo",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{   \"code\": 200,\n    \"message\" : \"success\",\n    \"dataMap\" :   {\n               \"userId\": 10,\n               \"username\": \"12138\",\n               \"mobile\": \"17681018301\",\n               \"email\": null,\n               \"userhead\": null,\n               \"creacte_time\": 1589348813846,\n               \"update_user\": null,\n           }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/user/getuserinfo"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/user/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : 200,\n    \"message\" : \"登录成功\",\n    \"dataMap\" : {\n               \"Id\": 10,\n               \"userName\": \"12138\",\n               \"mobile\": \"17681018301\",\n               \"email\": null,\n               \"headImg\": null,\n               \"createTime\": 1589348813846,\n               \"updataTime\": null,\n           }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/user/login"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/user/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/logout",
    "title": "退出登录",
    "description": "<p>退出登录</p>",
    "name": "logout",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{   \"code\": 200,\n    \"success\" : \"退出成功\",\n    \"result\" :  null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/user/logout"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/user/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/regest",
    "title": "注册",
    "description": "<p>用户注册</p>",
    "name": "regest",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gpass",
            "description": "<p>重复密码</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "codes",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "dataMap",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{   \"code\": 200,\n    \"success\" : \"注册成功\",\n    \"dataMap\" :  null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/user/regest"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/user/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/friend/friendRequest",
    "title": "好友请求",
    "description": "<p>好友请求</p>",
    "name": "friendRequest",
    "group": "friends",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "friendid",
            "description": "<p>好友ID</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "type",
            "description": "<p>加载类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : 200,\n    \"message\" : \"好友请求已发送\",\n    \"dataMap\" : {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/friend/friendRequest"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/user/friends.js",
    "groupTitle": "friends"
  },
  {
    "type": "get",
    "url": "/friend/getFriendList",
    "title": "好友列表",
    "description": "<p>好友列表</p>",
    "name": "getFriendList",
    "group": "friends",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : 200,\n    \"message\" : \"查询成功\",\n    \"dataMap\" : [\n        {\n            \n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/friend/getFriendList"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/user/friends.js",
    "groupTitle": "friends"
  },
  {
    "type": "post",
    "url": "/friend/getfriendRequest",
    "title": "获取好友请求",
    "description": "<p>获取好友请求</p>",
    "name": "getfriendRequest",
    "group": "friends",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "friendid",
            "description": "<p>好友ID</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "type",
            "description": "<p>加载类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : 200,\n    \"message\" : \"好友请求已发送\",\n    \"dataMap\" : {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/friend/getfriendRequest"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/user/friends.js",
    "groupTitle": "friends"
  }
] });
