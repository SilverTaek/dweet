# dweet
Tweet clone coding for Node.js

## API 명세서

```
API 명세서

# 트위터 전체 조회 API

Method: GET
Path: /api/v1/posts

Response
- 200 {"result": "SUCCESS"} or {"result": "FAIL"}
	- Array<user>
- 500 {"code": "TWEET_ERROR_999", "message": "일시적으로 사용 불가"}

# 트위터 사용자 아이디로 트위터 조회 API

Method: GET
Path: /api/v1/posts/{user_id}

Response
- 200 {"result": "SUCCESS"} or {"result": "FAIL"}
	- Array<tweets>
- 500 {"code": "TWEET_ERROR_999", "message": "일시적으로 사용 불가"}

# 트위터 생성 API

Method: POST
Path: /api/v1/posts
Body
-  content

Response
- 200 { "user_id":  xxxxx, "content": xxxxxx, "result": "SUCCESS"}
- 500 {"code": "TWEET_ERROR_999", "message": "일시적으로 사용 불가"}

# 트위터 수정 API
Method: UPDATE
Path: /api/v1/posts/{tweet_id}
Body
- content

Response
- 200 { "user_id":  xxxxx, "content": xxxxxx, "result": "UPDATE SUCCESS"}
- 500 {"code": "TWEET_ERROR_999", "message": "일시적으로 사용 불가"}

# 트위터 삭제 API
Method: DELETE
Path: /api/v1/tweets/{tweet_id}

Response
- 200 {"result": "DELETE SUCESS"} or {"result": "DELETE FAIL"}
- 500 {"code": "TWEET_ERROR_999", "message": "일시적으로 사용 불가"}

```