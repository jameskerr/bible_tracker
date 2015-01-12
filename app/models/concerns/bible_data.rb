module BibleData
  extend ActiveSupport::Concern

  included do
  end

  class_methods do
    def data
      [
        { 
          name: "Matthew",
          chapters: {
            1 => Array.new(25, false),
            2 => Array.new(23, false),
            3 => Array.new(17, false),
            4 => Array.new(25, false),
            5 => Array.new(48, false),
            6 => Array.new(34, false),
            7 => Array.new(29, false),
            8 => Array.new(34, false),
            9 => Array.new(38, false),
            10 => Array.new(42, false),
            11 => Array.new(30, false),
            12 => Array.new(50, false),
            13 => Array.new(58, false),
            14 => Array.new(36, false),
            15 => Array.new(39, false),
            16 => Array.new(28, false),
            17 => Array.new(27, false),
            18 => Array.new(35, false),
            19 => Array.new(30, false),
            20 => Array.new(34, false),
            21 => Array.new(46, false),
            22 => Array.new(46, false),
            23 => Array.new(39, false),
            24 => Array.new(51, false),
            25 => Array.new(46, false),
            26 => Array.new(75, false),
            27 => Array.new(66, false),
            28 => Array.new(20, false)
          } 
        },
        {
          name: "Mark",
          chapters: {
            1 => Array.new(45, false),
            2 => Array.new(28, false),
            3 => Array.new(35, false),
            4 => Array.new(41, false),
            5 => Array.new(43, false),
            6 => Array.new(56, false),
            7 => Array.new(37, false),
            8 => Array.new(38, false),
            9 => Array.new(50, false),
            10 => Array.new(52, false),
            11 => Array.new(33, false),
            12 => Array.new(44, false),
            13 => Array.new(37, false),
            14 => Array.new(72, false),
            15 => Array.new(47, false),
            16 => Array.new(20, false)
          }
        },
        {
          name: "Luke",
          chapters: {
            1 => Array.new(80, false),
            2 => Array.new(52, false),
            3 => Array.new(38, false),
            4 => Array.new(44, false),
            5 => Array.new(39, false),
            6 => Array.new(49, false),
            7 => Array.new(50, false),
            8 => Array.new(56, false),
            9 => Array.new(62, false),
            10 => Array.new(42, false),
            11 => Array.new(54, false),
            12 => Array.new(59, false),
            13 => Array.new(35, false),
            14 => Array.new(35, false),
            15 => Array.new(32, false),
            16 => Array.new(31, false),
            17 => Array.new(37, false),
            18 => Array.new(43, false),
            19 => Array.new(48, false),
            20 => Array.new(47, false),
            21 => Array.new(38, false),
            22 => Array.new(71, false),
            23 => Array.new(56, false),
            24 => Array.new(53, false)
          }
        },
        {
          name: "John",
          chapters: {
            1 => Array.new(51, false),
            2 => Array.new(25, false),
            3 => Array.new(36, false),
            4 => Array.new(54, false),
            5 => Array.new(47, false),
            6 => Array.new(71, false),
            7 => Array.new(53, false),
            8 => Array.new(59, false),
            9 => Array.new(41, false),
            10 => Array.new(42, false),
            11 => Array.new(57, false),
            12 => Array.new(50, false),
            13 => Array.new(38, false),
            14 => Array.new(31, false),
            15 => Array.new(27, false),
            16 => Array.new(33, false),
            17 => Array.new(26, false),
            18 => Array.new(40, false),
            19 => Array.new(42, false),
            20 => Array.new(31, false),
            21 => Array.new(25, false)
          }
        }
      ]
    end
  end
end