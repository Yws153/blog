import logo from './logo.svg';
import './App.css';
import HmacSha1 from 'crypto-js/hmac-sha1'
// import fetch from 'isomorphic-fetch'

function App() {
  return (
    <div>
      <div onClick={() => {
        // const xhr = new XMLHttpRequest()

        // // 2. 打开一个http请求
        // xhr.open("POST", "https://papipre.xfannix.com/CWOPEN/vc/put?check=CHECK_AUTH", true)
        // const str = `POST\napplication/json\n`
        // const sign = HmacSha1(str, 'sssss')
        // xhr.setRequestHeader("Authorization", sign) // 设置http请求头（按需设置）
        // xhr.withCredentials = true // 跨域请求需要带授权信息
        // xhr.onreadystatechange = function(){
        //     console.log(xhr.readyState) // 监听readyState的变化
        //     if (xhr.readyState === xhr.DONE) {
        //         console.log(xhr.status) // 获取到http请求返回的状态码
        //         console.log(xhr.responseText) // 获取http请求返回的数据
        //     }
        // }
        // xhr.send()

        // let option
        // let url = `https://papipre.xfannix.com/CWOPEN/vc/put`
        // const token = 'erer'
        // const method = 'POST'
        // const dataJson = {
        //   "vcDate":"2018-01-31",
        //   "year":"2018",
        //   "month":"01",
        //   "jvList":[
        //   {
        //   "jvAmount":"12345.67",
        //   "jvUnit":"个",
        //   "jvCount":"1",
        //               "acId":"1002",
        //   "jvDirection":"debit",
        //   "jvAbstract":"31日营业收入",
        //   "assList":[
        //   ]
        //   },
        //   {
        //   "acId":"5001",
        //   "jvCount":"1",
        //   "jvUnit":"个",
        //   "jvAmount":"12345.67",
        //   "jvDirection":"credit",
        //   "jvAbstract":"31日营业收入",
        //   "assList":[
        //   {
        //   "assCategory":"网店",
        //   "assId":"1"
        //   }
        //   ]
        //   }
        //   ]
        //   }

        // switch (method.toUpperCase()) {
        //   case 'GET':
        //     // url = URL[type] + '?' + (data ? [data, network, source].join('&') : [network, source].join('&'))
        //     // url = url 
        //     option = {
        //       credentials: 'include',
        //       headers: {
        //         'Token': token
        //       },
        //     }
        //     break
        //   case 'POST':
        //     // url = URL[type] + '?' + [network, source].join('&')
        //     // if(type === 'insertStorageCardList' || type === 'modifyStorageCardList') {
        //     // 	url = _url + '?' + [network, source, psiSobId, psiCorpId, version, timestamp, isPlayStr, thirdLogin, ssid].join('&')
        //     // }else{
        //       // url = url
        //     // }
        //     option = {
        //       method: 'POST',
        //       headers: {
        //         // 'Content-Type': 'application/json',
        //         // 'Token': token

        //         'Date': new Date(),
        //         'Authorization': 'VC LTAIIRYNePhiFvJT:Lm7EWzaoha7N04/+TjhEe4xF1YE==',
        //         'Content-MD5': '995D73E309603C4C8D2CE68D2FFC6B20',
        //         'Content-Type': 'application/json',
        //         'Host': 'papipre.xfannix.com',
        //         'User-Agent': 'xfn-vc-producer',
        //         'Content-Length': 254,
        //         'x-vc-signaturemethod': 'hmac-sha1',
        //         'x-vc-resourceuri': '/CWOPEN/vc/put'


        //       },
        //       credentials: 'include',
        //       body: dataJson,
              
        //     }
        //     break
         
        //   default:
        //     return console.error('method is not GET or POST')
        // }

        // try {
        //   fetch(url, option)
        //   .then(res => {
        //     if (res.status === 200) {
        //       return res.json()
        //     } else {
        //       if (res.status !== 509) {
        //         return {
        //           code: '-2',
        //           message: `通信异常，服务器返回码${res.status}`
        //         }
        //       } else {
        //         return
        //       }
        //     }
        //   })
        //   .catch(err => {
        //     console.log('服务器异常：'+err);
        //     return {
        //       code: '-2',
        //       message: `系统无响应`
        //     }
        //   })
        //   .then(json => {
        //     if (json) {
        //       console.log('json', json);
        //     }
        //   })
        // } catch (e) {
        //   // 捕获处理
        //   console.log(e);
        // }

        var HmacSha1 = require('crypto-js/hmac-sha1') ;
        var Base64 = require('crypto-js/enc-base64');

        const str ='POST\n99914B932BD37A50B983C5E7C90AE93B\napplication/json\nFri'

        var Authorization = Base64.stringify((HmacSha1(str,'')));

        console.log('sss', Authorization);



        const xhr = new XMLHttpRequest()

			// 2. 打开一个http请求
			xhr.open("POST", "https://papipre.xfannix.com/CWOPEN/vc/put?check=CHECK_AUTH", true)


			// xhr.setRequestHeader("Token", "Bearer") // 设置http请求头（按需设置）
      // VC 7d430c09bfc140359628e39b1063d1fe:woQShBvDtPCjc8RSaw60/pHq36E=

			// xhr.setRequestHeader("Date", 'Fri, 09 Aug 2019 06:52:43 GMT') // 设置http请求头（按需设置）
			xhr.setRequestHeader("Authorization", `VC 7d430c09bfc140359628e39b1063d1fe:${Authorization}`) // 设置http请求头（按需设置）
			// xhr.setRequestHeader("Content-MD5", "995D73E309603C4C8D2CE68D2FFC6B20") // 设置http请求头（按需设置）
			xhr.setRequestHeader("Content-Type", "application/json") // 设置http请求头（按需设置）
			// xhr.setRequestHeader("Host", "papipre.xfannix.com") // 设置http请求头（按需设置）
			// xhr.setRequestHeader("User-Agent", "xfn-vc-producer") // 设置http请求头（按需设置）
			// xhr.setRequestHeader("Content-Length", '254') // 设置http请求头（按需设置）
			xhr.setRequestHeader("x-vc-signaturemethod", "hmac-sha1") // 设置http请求头（按需设置）
			xhr.setRequestHeader("x-vc-resourceuri", "/CWOPEN/vc/put") // 设置http请求头（按需设置）
			// xhr.setRequestHeader("Token", "Bearer") // 设置http请求头（按需设置）


//         'Date': new Date(),
        //         'Authorization': 'VC LTAIIRYNePhiFvJT:Lm7EWzaoha7N04/+TjhEe4xF1YE==',
        //         'Content-MD5': '995D73E309603C4C8D2CE68D2FFC6B20',
        //         'Content-Type': 'application/json',
        //         'Host': 'papipre.xfannix.com',
        //         'User-Agent': 'xfn-vc-producer',
        //         'Content-Length': 254,
        //         'x-vc-signaturemethod': 'hmac-sha1',
        //         'x-vc-resourceuri': '/CWOPEN/vc/put'





			// xhr.withCredentials = true // 跨域请求需要带授权信息
			// 3. 添加响应http请求的状态变化的函数
			xhr.onreadystatechange = function(){
			    console.log(xhr.readyState) // 监听readyState的变化
			    if (xhr.readyState === xhr.DONE) {
			        console.log(xhr.status) // 获取到http请求返回的状态码
			        console.log(xhr.responseText) // 获取http请求返回的数据
			    }
			}
			// 4. 发送http请求
			xhr.send()

      }}>发送请求</div>
    </div>
  );
}

export default App;
