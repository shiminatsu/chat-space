#messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|varchar|null: false: true|
|image|varchar|null: false: true|

#Association
- belongs_to :group
- belongs_to :user