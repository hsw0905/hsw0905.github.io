---
date: '2021-05-16'
title: 'JDBC의 등장과 한계'
categories: ['JDBC']
summary: 'JDBC 이야기'
---
# JDBC
- Java에서 RDBMS를 사용할 수 있게 해주는 API
- 사용하려면 각 DBMS 벤더에서 제공하는 JDBC Driver가 필요하다.

## JDBC는 왜 등장하게 되었는가?
- DB를 다른 종류로 변경하게 되면 Application Server에 개발된 DB 사용 코드도 같이 변경해야 하는 문제
- DB마다 커넥션 연결, SQL 전달 등의 방법이 모두 다른 문제

## JDBC의 한계
- DB 변경시 JDBC 코드는 변경하지 않아도 된다.
- 하지만 SQL은 해당 DB에 맞도록 변경해주어야 한다. (SQL은 일반적인 부분만 공통화했기 때문)

## JDBC를 좀 더 편하게 사용하는 기술
- SQL Mapper
    - 장점
        - SQL의 응답 결과를 객체로 편리하게 변환해준다.
        - JDBC의 반복되는 코드를 제거해준다.
    - 단점
        - 개발자가 SQL을 직접 작성해야 한다.
    - 대표적인 예시
        - Spring JdbcTemplate, MyBatis
- ORM
    - 객체를 관계형 DB 테이블과 매핑해주는 기술
    - 장점
        - SQL을 직접 작성하지 않아도 된다.
    - 단점
        - 높은 학습 비용

## DB Connection 획득
- Server -> DB 드라이버 -> DB
    - DB 드라이버를 통해 커넥션 조회
    - DB 드라이버 <-> DB (TCP/IP 연결)
        - 3 way handshaking
    - 서버 : ID/PW 부가정보 전달
    - DB 드라이버: 인증 완료 + 세션 생성
        - response Connection
        - 앞으로 해당 커넥션을 통한 모든 동작은 세션에서 실행(SQL 실행)
            - (트랜잭션 시작-커밋-롤백 동작)
            - 커넥션을 닫거나, DB 쪽에서 세션 강제 종료시 세션은 종료
            - 커넥션 1개당 세션 1개 생성
    - 많은 비용

### DataSource
- 자바 진영 인터페이스 - 커넥션 획득하는 방법을 추상화
- 설정과 사용 책임 분리

### Connection Pool
- 위의 커넥션을 미리 획득(시스템 스펙에 따라 10개 ~ 그 이상)
- 서버는 미리 획득한 커넥션 객체를 바로 사용 가능
- 사용한 커넥션은 연결이 살아있는 상태로 커넥션 풀에 다시 반환 (재사용)
- 주로 오픈소스 사용 - (보통 HikariCP)


### JDBC -> JdbcTemplate
- as-is
```java
@Slf4j
public class MemberDao {
    private final DataSource dataSource;

    public MemberDao(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    private Connection getConnection() throws SQLException {
        return dataSource.getConnection();
    }

    public Member findById(String memberId) throws SQLException {
        String sql = "select * from members where member_id = ?";
        Connection connection = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            connection = getConnection();
            pstmt = connection.prepareStatement(sql);
            pstmt.setString(1, memberId);
            rs = pstmt.executeQuery();

            if (rs.next()) {
                Member member = new Member();
                member.setMember_id(rs.getString("member_id"));
                member.setMoney(rs.getInt("money"));
                return member;
            } else {
                throw new NoSuchElementException("member not found" + memberId);
            }

        } catch (SQLException e) {
            log.error("[MemberRepository][findById] error", e);
            throw e;
        } finally {
            close(connection, pstmt, null);
        }
    }
```
- JDBC를 그냥 사용하면 불편한점
    - 반복되는 자원 정리로 인한 Try-Catch 구문
    - DB마다 다른 예외처리(SQLException)
- 스프링의 해결
    - 템플릿 콜백 패턴을 사용하여 Try-Catch 반복 문제 해결
    - 데이터 접근 계층에 대해 일관된 예외 추상화를 제공해준다.
        - 특정 DB 기술에 종속적이지 않게 되었다.

- to-be
```java
@Slf4j
public class MemberDao {

    private final JdbcTemplate template;

    public MemberDao(DataSource dataSource) {
        this.template = new JdbcTemplate(dataSource);
    }

    private RowMapper<Member> memberRowMapper() {
        return (rs, rowNum) -> {
            Member member = new Member();
            member.setMember_id(rs.getString("member_id"));
            member.setMoney(rs.getInt("money"));
            return member;
        };
    }

    public Member findById(String memberId) {
        String sql = "select * from members where member_id = ?";
        return template.queryForObject(sql, memberRowMapper(), memberId);
    }
```
