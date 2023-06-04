---
date: '2021-05-16'
title: 'JWT 개념 정리'
categories: ['JWT', '인증', '인가']
summary: 'JWT 개념과 로그인 흐름 정리'
---
# JWT

- JSON Web Token : 개방형 표준 (RFC 7519)
- 당사자간에 정보를 JSON 객체로 안전하게 전송하기 위한 방법
- 속성 정보(Claim)를 JSON 구조로 표현
- 서버와 클라이언트간 정보를 주고 받을 때, HTTP Request Header에 JSON 토큰을 넣은 후, 서버는 별도로 인증 과정 필요 없이 Header에 포함되어 있는 JWT 정보를 통해 인증한다.
- 사용되는 JSON 데이터는 URL-Safe 하도록 URL에 포함할 수 있는 문자만으로 생성한다.

### 특징

- 사용자 인증에 필요한 정보를 토큰 자체에 포함 → 별도의 인증 저장소가 필요 없다.
- 중앙 집중식 인증 서버 + DB에 의존하지 않는 쉬운 인증 및 인가 방법을 제공
- 두 개체 사이에서 손쉽게 전달 될 수 있습니다. 웹서버의 경우 HTTP의 헤더에 넣어 전달할 수도 있고, URL의 파라미터로 전달 할 수도 있다.
- 마이크로서비스의 인증, 인가에 사용할 수 있다. (능률적인 접근 권한 관리)

### OAuth와의 관계

- JWT : 토큰의 종류 중 하나
- OAuth : 토큰을 발급하고 인증하는 방법을 설명하는 메커니즘

### JWT 토큰 구성
- **Header**
    - 토큰 타입, 해싱 알고리즘 지정
- **Payload**
    - 토큰에 담을 정보가 담겨 있다.
    - 여기에 담을 정보의 한 조각을 클레임(Claim)이라고 부르고, name / value의 한 쌍으로 이루어져 있다.
    - 토큰은 여러개의 클레임 들을 담을 수 있다. [[참고]](https://velopert.com/2389)
- **Signature**
    - 헤더의 인코딩 값과 정보의 인코딩 값을 합친 후 주어진 비밀키로 해쉬를 하여 생성한다.
    - 서명으로 헤더와 페이로드가 위 변조 되지 않았다는 것을 검증할 수 있다.

### JWT Flow [[참고]](https://tansfil.tistory.com/58)

1. 사용자 : 로그인
2. 서버 : 계정 정보 확인 → 사용자 고유 ID 값 부여 + 기타정보 → Payload에 넣는다.
3. 서버 : JWT 토큰의 유효시간을 설정한다.
4. 서버 : 암호화할 SECRET_KEY를 이용해 JWT - Access_Token을 사용자에게 발급한다. **(로그인 완료)**
5. 사용자 : JWT - Access_Token을 받아 저장한 후, 인증이 필요한 요청마다 토큰을 헤더에 실어 보낸다.
    - JWT - Access_Token이 만료된 경우 : Refresh_Token을 이용한 재발급 [[참고]](https://tansfil.tistory.com/59?category=475681)
6. 다른 도메인 서버 : 해당 토큰의 Signature를 SECRET_KEY를 이용해 복호화 한 후, 조작여부, 유효기간을 검증 후, Payload를 디코딩하여 해당 사용자에 맞는 데이터를 전달한다.


### 기타 참고사항

- [JWT Blacklist](https://dev.to/chukwutosin_/how-to-invalidate-a-jwt-using-a-blacklist-28dl)
- [Web Token의 필요성](https://sanghaklee.tistory.com/47)
- [MSA-API-Gateway-Considerations](https://www.globallogic.com/wp-content/uploads/2017/08/Microservice-Architecture-API-Gateway-Considerations.pdf)
