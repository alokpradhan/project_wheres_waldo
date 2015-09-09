# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Tag.destroy_all

users = [ 'Waldo', 'Wenda', 'Odlaw',
              'Wima', 'Wizard Whitebeard', 'Ulf'
        ];

users.each do |user|
  User.create(name: user);
end

3.times do |i|
  Tag.create(positionX: 150*(i+1), positionY: 150*(i+1), user_id: i+1 )
end