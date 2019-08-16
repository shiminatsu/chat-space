#messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|text|null: false: true|
|image|string|null: false: true|

#Association
- belongs_to :users
- belongs_to :groupes


## usersテーブル
|Column|Type|Options|
|---------|-------|
|user_name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many  :messages
- has_many  :tags
- has_many  :groupes,  through:  :tags
- add_index :users,  :user_name


## groupesテーブル
|Column|Type|Options|
|------|----|-------|
|groupe_name|string|null: false|

### Association
- has_many  :tags
- has_many  :users,  through:  :tags


## tagsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :users
- belongs_to :groupes


