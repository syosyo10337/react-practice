# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
initial_tasks = Task.create(
  [
    {name: "お買い物", is_done: false},
    {name: "プログラミング学習", is_done: false},
    {name: "ランニンググレイト", is_done: false},
  ]
)