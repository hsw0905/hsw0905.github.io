---
date: '2021-05-15'
title: 'OAuth2.0 내용과 권한 허가 과정'
categories: ['OAuth', '인증', '인가']
summary: 'OAuth와 인증/인가 이야기'
---

# OAuth 2.0

- 제 3의 앱이 자원의 소유자인 서비스 이용자를 대신하여 서비스를 요청할 수 있도록 자원 접근 권한을 위임하는 방법
- 인증을 위한 오픈 표준 프로토콜

## 기존의 로그인 방식과 다른점? [[참고]](https://woowabros.github.io/experience/2019/03/05/aop-oauth2-redis.html)

- 전통적인 웹서비스 → ID/Password로 인증을 받고 세션 유지하는 방식
    - 쿠키를 지우거나, 세션 유효기간이 만료되면 재인증해야 하는 번거로움이 있다.
    - 이 방식이 나쁘다는 의미가 아니라, 사용자의 사용환경상 이 방법이 낫기 때문
    - 웹은 어디에서나 접속 가능하고, 본인만 사용하는 PC라고 확신할 수 없기 때문에,
    - 적절한 시점에 로그아웃을 해야 보안상 안전할 것이다.
- App 사용환경 → 스마트폰은 자신만의 것
    - App - Server간 인증에서는 매번 로그아웃 하는 것은 특별한 경우가 아닌 이상 사용자에게 번거로운 경험이다.
    - OAuth를 사용하면 최초 가입 후 로그인을 진행한 뒤, 사용자가 매번 로그인 할 필요가 없도록 하면서,
    - 인증키를 주기적으로 변경하며,
    - 사용자가 직접 재인증 하지 않아도 된다.


## OAuth 2.0 버전

- OAuth 1.0 의 성능, 문제점을 보완
- 보안 강화를 위해 **Access Token의 Life-time을 지정하여 사용**
- Protected 자원에 접근시 HTTPS 사용

### 알아둬야 할 역할 용어

1. **Resource Owner**
    - 사용자
    - Resource Server의 계정을 소유하고 있는 사람
    - Protected Resource에 접근하는 권한을 제공한다.
2. **Resource Server (REST API)**
    - OAuth 2.0 서비스를 제공하고, 자원을 관리하는 서버
    - 예 : Google, Naver, Kakao
    - Client가 Access_token을 사용한 요청을 수신 후
    - 권한을 검증한 후 결과를 응답한다.
3. **Client**
    - Resource Server의 API를 사용하여 데이터를 가져오려고 하는 서버 (서비스)
    - 예 : Apartalk Service, 내가 만든 사이트
    - Resource Owner의 Protected Resource에 접근을 요청하는 Application이다.
4. **Authorization Server**
    - Client가 Resource Server의 서비스를 사용할 수 있게 인증
    - 토큰을 발행해주는 서버
    - 예: Google, Naver, Kakao의 인증 서버
    - Client가 성공적으로 Access_Token을 발급 받은 이후
    - Resource Owner를 인증하고, 권한 부여를 한다.

### 권한 허가를 위한 절차(Protocol Flow) [[참고]](https://blog.weirdx.io/post/39955)

- 앞에서 소개한 4가지 역할들이 서로 상호작용을 통해 허가 절차가 진행된다.

1. **[Request]** **Authorization ( Client → Resource Owner )**
    - Client가 Resource Owner에게 권한 요청을 한다.
    - 요청 방법
        1. Resource Owner에게 직접 요청
        2. Resource Server를 통해 간접 요청
2. **[Response]** **Authorization Grant ( Resource Owner → Client )**
    - Resource Owner가 권한을 허가하면, Client는 Authorization Grant를 발급 받는다.
    - Authorization Grant : Resource Owner가 자원에 접급할 수 있는 권하는 부여했다는 확인증
        - Client가 Access_Token을 요청하여 얻어오는데 사용된다.
        - Authorization Grant는 4개의 Type이 있다. [[참고]](https://gdtbgl93.tistory.com/181)
            1. **Authorization Code**
                - 자신만의 백엔드 서버를 갖고 동작하는 서비스일 경우
            2. **Implicit**
                - 위의 Authorization Code에서 인증 코드 교환 과정을 빼고 바로 Access_Token 발급
                - Authorization Code와 마찬가지로 브라우저를 띄워 사용자에게 승인을 요구한다.
            3. **Resource Owner Password Credentials**
                - 자신이 자신의 권한 서버에 접속할 경우 (신뢰할 수 있는 Client)
                - 예: 카카오 앱에서 카카오 인증을 한다.
            4. **Client Credentials**
                - 사용자 인증 및 권한부여 X
                - 대신, 해당 앱이나 서비스 자체에 인증 및 권한부여
                - 위의 경우 보통 Firebase와 같은 PaaS 서비스 사용
3. **[Request] Access_Token ( Client → Authorization Server )**
    - Authorization Grant를 받은 Client는 Authorization 서버에 Access_Token을 요청한다.
4. **[Response] Access_Token ( Authorization Server → Client )**
    - 요청을 받은 Authorization Server는 Client가 보내준 Authorization Grant의 유효성을 검증한다.
    - 유효하다면, Access_Token을 발급하여 결과를 Client에 전달한다.
5. **[Request] Resource ( Client → Resource Server )**
    - Access_Token을 받은 Client는 토큰과 함께 Resource Server에 자원을 요청한다.
6. **[Response] Protected Resource ( Resource Server → Client )**
    - 요청 받은 Resource Server는 Access_Token의 유효성을 검증한다.
    - 유효하다면, 요청에 맞는 처리를 하여 결과를 Client에게 전달한다.


### Access_Token과 Refresh_Token?

- **Access_Token**
    - Authorization Server로부터 요청 절차를 정상적으로 종료한 Client에게 발급된다.
    - 인증에 필요한 형태(id, password 등)을 토큰으로 표현
    - 문자열 형태
    - Resource Server는 여러가지 인증 방식에 각각 대응하지 않아도 권한을 확인 할 수 있게 된다.
    - **한번 발급받은 Access_Token은 사용 시간이 제한되어 있다.**

- **Refresh_Token**
    - **Access_Token 사용 시간이 만료되면 새로운 Access_Token을 얻기 위해 활용된다.**
    - Authorization Server로부터 Access_Token을 발급 받는 시점에 Refresh_Token도 함께 발급된다.
    - Client는 별도의 발급 절차 없이 Refresh_Token을 미리 가지고 있을 수 있다.
    - Authorization Server에서만 활용되며 Resource Server에는 전송되지 않는다.
    - 일정 시간이 흘러 Access_Token이 만료되면
        1. Resource Server는 이후 요청에 대해 오류를 응답한다.
        2. Client는 오류를 받고 Access_Token이 만료되었음을 알게 된다.
        3. Client는 전에 받았던 Refresh_Token을 Authorization Server에 보내 새로운 Access_Token을 요청한다.
        4. 요청을 받은 Authorization Server는 Refresh_Token의 유효성 검증 후, 새로운 Access_Token을 발급한다.
        5. 이 과정에 옵션에 따라 Refresh_Token도 새로 발급 받을 수 있다.


### 기타 참고사항

- [Youtube - [생활코딩] OAuth 2.0 : 동작 메커니즘](https://www.youtube.com/watch?v=PIlP_YX5HK8&list=LL&index=1)
- [우아한형제들 - 기술블로그 : AOP를 이용한 OAuth2 캐시 적용하기](https://woowabros.github.io/experience/2019/03/05/aop-oauth2-redis.html)
- [우아한테크세미나 : 우아한레디스 by 강대명님](https://www.youtube.com/watch?v=mPB2CZiAkKM)
- [Flask-OAuthlib : Client](https://flask-oauthlib.readthedocs.io/en/latest/client.html)
- [RFC 6749 - OAuth 2.0](https://tools.ietf.org/html/rfc6749#section-4.3)
