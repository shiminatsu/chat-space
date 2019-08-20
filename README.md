## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
|body|text||
|image|string||

### Association
- belongs_to :user
- belongs_to :group


## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true, index: true|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many  :messages
- has_many  :groups_users
- has_many  :groups,  through:  :groups_users


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many  :messages
- has_many  :groups_users
- has_many  :users,  through:  :groups_users


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


