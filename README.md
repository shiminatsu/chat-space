## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|text|null: false: true|
|image|string|null: false: true|

### Association
- belongs_to :user
- belongs_to :group


## userテーブル
|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false, unique: true, index: true|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many  :messages
- has_many  :groups_users
- has_many  :group,  through:  :groups_users


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|

### Association
- has_many  :groups_users
- has_many  :user,  through:  :groups_users


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


