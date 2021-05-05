Server [localhost]:
Database [postgres]:
Port [5432]:
Username [postgres]:
Password for user postgres:
psql (13.2)
WARNING: Console code page (437) differs from Windows code page (1252)
         8-bit characters might not work correctly. See psql reference
         page "Notes for Windows users" for details.
Type "help" for help.

postgres=# \l
                                         List of databases
   Name    |  Owner   | Encoding |      Collate       |       Ctype        |   Access privileges
-----------+----------+----------+--------------------+--------------------+-----------------------
 dvdrental | postgres | UTF8     | English_India.1252 | English_India.1252 |
 postgres  | postgres | UTF8     | English_India.1252 | English_India.1252 |
 template0 | postgres | UTF8     | English_India.1252 | English_India.1252 | =c/postgres          +
           |          |          |                    |                    | postgres=CTc/postgres
 template1 | postgres | UTF8     | English_India.1252 | English_India.1252 | =c/postgres          +
           |          |          |                    |                    | postgres=CTc/postgres
(4 rows)


postgres=# \c dvdrental
You are now connected to database "dvdrental" as user "postgres".
dvdrental=# \dt
             List of relations
 Schema |     Name      | Type  |  Owner
--------+---------------+-------+----------
 public | actor         | table | postgres
 public | address       | table | postgres
 public | category      | table | postgres
 public | city          | table | postgres
 public | country       | table | postgres
 public | customer      | table | postgres
 public | film          | table | postgres
 public | film_actor    | table | postgres
 public | film_category | table | postgres
 public | inventory     | table | postgres
 public | language      | table | postgres
 public | payment       | table | postgres
 public | rental        | table | postgres
 public | staff         | table | postgres
 public | store         | table | postgres
(15 rows)


dvdrental=# SELECT first_name FROM customer;
 first_name
-------------
 Jared
 Mary
 Patricia
 Linda
 Barbara
 Elizabeth
 Jennifer
 Maria
 Susan
 Margaret
 Dorothy
 Lisa
 Nancy
 Karen
 Betty
 Helen
 Sandra
 Donna
 Carol
 Ruth
 Sharon
 Michelle
 Laura
 Sarah
 Kimberly
 Deborah
 Jessica
 Shirley
 Cynthia
 Angela
 Melissa
 Brenda
 Amy
 Anna
 Rebecca
 Virginia
 Kathleen
 Pamela
 Martha
 Debra
 Amanda
 Stephanie
 Carolyn
 Christine
 Marie
 Janet
 Catherine
 Frances
 Ann
 Joyce
 Diane
 Alice
 Julie
 Heather
 Teresa
 Doris
 Gloria
 Evelyn
 Jean
 Cheryl
 Mildred
 Katherine
 Joan
 Ashley
 Judith
 Rose
 Janice
 Kelly
 Nicole
 Judy
 Christina
 Kathy
 Theresa
 Beverly
 Denise
 Tammy
 Irene
 Jane
 Lori
 Rachel
 Marilyn
 Andrea
 Kathryn
 Louise
 Sara
 Anne
 Jacqueline
 Wanda
 Bonnie
 Julia
 Ruby
 Lois
 Tina
 Phyllis
 Norma
 Paula
 Diana
 Annie
 Lillian
 Emily
 Robin
 Peggy
 Crystal
 Gladys
 Rita
 Dawn
 Connie
 Florence
 Tracy
 Edna
 Tiffany
 Carmen
 Rosa
 Cindy
 Grace
 Wendy
 Victoria
 Edith
 Kim
 Sherry
 Sylvia
 Josephine
 Thelma
 Shannon
 Sheila
 Ethel
 Ellen
 Elaine
 Marjorie
 Carrie
 Charlotte
 Monica
 Esther
 Pauline
 Emma
 Juanita
 Anita
 Rhonda
 Hazel
 Amber
 Eva
 Debbie
 April
 Leslie
 Clara
 Lucille
 Jamie
 Joanne
 Eleanor
 Valerie
 Danielle
 Megan
 Alicia
 Suzanne
 Michele
 Gail
 Bertha
 Darlene
 Veronica
 Jill
 Erin
^Cdvdrental=# SELECT first_name, last_name FROM customer;
 first_name  |  last_name
-------------+--------------
 Jared       | Ely
 Mary        | Smith
 Patricia    | Johnson
 Linda       | Williams
 Barbara     | Jones
 Elizabeth   | Brown
 Jennifer    | Davis
 Maria       | Miller
 Susan       | Wilson
 Margaret    | Moore
 Dorothy     | Taylor
 Lisa        | Anderson
 Nancy       | Thomas
 Karen       | Jackson
 Betty       | White
 Helen       | Harris
 Sandra      | Martin
 Donna       | Thompson
 Carol       | Garcia
 Ruth        | Martinez
 Sharon      | Robinson
 Michelle    | Clark
 Laura       | Rodriguez
 Sarah       | Lewis
 Kimberly    | Lee
 Deborah     | Walker
 Jessica     | Hall
^Cdvdrental=# SELECT first_name, last_name FROM customer
dvdrental-# SELECT first_name, last_name FROM customer ORDER BY first_name DESC;
ERROR:  syntax error at or near "SELECT"
LINE 2: SELECT first_name, last_name FROM customer ORDER BY first_na...
        ^
dvdrental=# SELECT first_name, last_name FROM customer ORDER BY last_name DESC;
 first_name  |  last_name
-------------+--------------
 Cynthia     | Young
 Marvin      | Yee
 Luis        | Yanez
 Brian       | Wyman
 Brenda      | Wright
 Tyler       | Wren
 Florence    | Woods
 Lori        | Wood
 Virgil      | Wofford
 Darren      | Windham
 Susan       | Wilson
 Bernice     | Willis
 Gina        | Williamson
 Linda       | Williams
 Jon         | Wiles
 Roy         | Whiting
 Betty       | White
 Lucy        | Wheeler
 Fred        | Wheat
 Mitchell    | Westmoreland
 Edna        | West
 Sheila      | Wells
 Marlene     | Welch
 Ronald      | Weiner
 Ethel       | Webb
 Yolanda     | Weaver
 Mike        | Way
^Cdvdrental=# select distinct first_name from customer;
 first_name
-------------
 Danny
 Amber
 Johnnie
 Edward
 Cindy
 Amy
 Earl
 Rene
 Geraldine
 Carolyn
 Nancy
 Adrian
 Ray
 Kenneth
 Mathew
 Lydia
 Jaime
 Victoria
 Carlos
 Grace
 Tammy
 Steve
 Vernon
 Justin
 Susan
 Tony
 Wayne
^Cdvdrental=# select last_name, first_name from customer where first_name = 'jamie';
 last_name | first_name
-----------+------------
(0 rows)


dvdrental=# select last_name, first_name from customer where first_name = 'Jamie';
 last_name | first_name
-----------+------------
 Rice      | Jamie
 Waugh     | Jamie
(2 rows)


dvdrental=# select last_name, first_name from customer order by last_name limit 5;
 last_name | first_name
-----------+------------
 Abney     | Rafael
 Adam      | Nathaniel
 Adams     | Kathleen
 Alexander | Diana
 Allard    | Gordon
(5 rows)


dvdrental=# SELECT customer_id,
dvdrental-# rental_id,
dvdrental-# return_date
dvdrental-# FROM
dvdrental-# rental
dvdrental-# WHERE
dvdrental-# customer_id IN (1, 2)
dvdrental-# ORDER BY
dvdrental-# return_date DESC;
 customer_id | rental_id |     return_date
-------------+-----------+---------------------
           2 |     15145 | 2005-08-31 15:51:04
           1 |     15315 | 2005-08-30 01:51:46
           2 |     14743 | 2005-08-29 00:18:56
           1 |     15298 | 2005-08-28 22:49:37
           2 |     14475 | 2005-08-27 08:59:32
           1 |     14825 | 2005-08-27 07:01:57
           2 |     15907 | 2005-08-25 23:23:35
           2 |     12963 | 2005-08-23 11:37:04
           1 |     13176 | 2005-08-23 08:50:54
           1 |     14762 | 2005-08-23 01:30:57
           1 |     12250 | 2005-08-22 23:05:29
           1 |     13068 | 2005-08-20 14:44:16
           2 |     11614 | 2005-08-20 07:04:18
           1 |     11824 | 2005-08-19 10:11:54
           1 |     11299 | 2005-08-10 16:40:52
           1 |     10437 | 2005-08-10 12:12:04
           2 |     11177 | 2005-08-10 10:55:48
           2 |     11087 | 2005-08-10 10:37:41
           2 |      9236 | 2005-08-08 18:52:43
           2 |      9296 | 2005-08-08 11:57:13
           2 |      8230 | 2005-08-06 19:52:59
           2 |      9465 | 2005-08-06 16:43:53
           2 |     10466 | 2005-08-06 06:28:26
           2 |      9248 | 2005-08-05 11:19:11
           2 |     11256 | 2005-08-04 16:39:53
           1 |     11367 | 2005-08-04 13:19:38
           2 |      9031 | 2005-08-04 10:45:10
^Cdvdrental=# SELECT
dvdrental-# customer_id,
dvdrental-# payment_id,
dvdrental-# amount
dvdrental-# FROM
dvdrental-# payment
dvdrental-# WHERE
dvdrental-# amount BETWEEN 8 AND 9;
 customer_id | payment_id | amount
-------------+------------+--------
         343 |      17517 |   8.99
         347 |      17529 |   8.99
         347 |      17532 |   8.99
         348 |      17535 |   8.99
         349 |      17540 |   8.99
         379 |      17648 |   8.99
         403 |      17747 |   8.99
         409 |      17775 |   8.99
         423 |      17817 |   8.99
         431 |      17853 |   8.99
         442 |      17886 |   8.99
         465 |      17990 |   8.99
         466 |      17993 |   8.99
         467 |      17997 |   8.99
         468 |      18002 |   8.99
         474 |      18027 |   8.99
         478 |      18040 |   8.99
         483 |      18059 |   8.99
         485 |      18065 |   8.99
         497 |      18099 |   8.99
         510 |      18146 |   8.99
         510 |      18149 |   8.99
         517 |      18180 |   8.99
         519 |      18187 |   8.99
         522 |      18195 |   8.99
         523 |      18199 |   8.99
         537 |      18248 |   8.99
^Cdvdrental=# SELECT
dvdrental-# first_name,
dvdrental-#         last_name
dvdrental-# FROM
dvdrental-# customer
dvdrental-# WHERE
dvdrental-# first_name LIKE 'Jen%';
 first_name | last_name
------------+-----------
 Jennifer   | Davis
 Jennie     | Terry
 Jenny      | Castro
(3 rows)


dvdrental=# CREATE TABLE basket_a (
dvdrental(#     a INT PRIMARY KEY,
dvdrental(#     fruit_a VARCHAR (100) NOT NULL
dvdrental(# );
CREATE TABLE
dvdrental=#
dvdrental=# CREATE TABLE basket_b (
dvdrental(#     b INT PRIMARY KEY,
dvdrental(#     fruit_b VARCHAR (100) NOT NULL
dvdrental(# );
CREATE TABLE
dvdrental=#
dvdrental=# INSERT INTO basket_a (a, fruit_a)
dvdrental-# VALUES
dvdrental-#     (1, 'Apple'),
dvdrental-#     (2, 'Orange'),
dvdrental-#     (3, 'Banana'),
dvdrental-#     (4, 'Cucumber');
INSERT 0 4
dvdrental=#
dvdrental=# INSERT INTO basket_b (b, fruit_b)
dvdrental-# VALUES
dvdrental-#     (1, 'Orange'),
dvdrental-#     (2, 'Apple'),
dvdrental-#     (3, 'Watermelon'),
dvdrental-#     (4, 'Pear');
INSERT 0 4
dvdrental=# SELECT
dvdrental-#     a,
dvdrental-#     fruit_a,
dvdrental-#     b,
dvdrental-#     fruit_b
dvdrental-# FROM
dvdrental-#     basket_a
dvdrental-# INNER JOIN basket_b
dvdrental-#     ON fruit_a = fruit_b;
 a | fruit_a | b | fruit_b
---+---------+---+---------
 1 | Apple   | 2 | Apple
 2 | Orange  | 1 | Orange
(2 rows)


dvdrental=# SELECT
dvdrental-#     a,
dvdrental-#     fruit_a,
dvdrental-#     b,
dvdrental-#     fruit_b
dvdrental-# FROM
dvdrental-#     basket_a
dvdrental-# LEFT JOIN basket_b
dvdrental-#    ON fruit_a = fruit_b;
 a | fruit_a  | b | fruit_b
---+----------+---+---------
 1 | Apple    | 2 | Apple
 2 | Orange   | 1 | Orange
 3 | Banana   |   |
 4 | Cucumber |   |
(4 rows)


dvdrental=# SELECT
dvdrental-#     a,
dvdrental-#     fruit_a,
dvdrental-#     b,
dvdrental-#     fruit_b
dvdrental-# FROM
dvdrental-#     basket_a
dvdrental-# LEFT JOIN basket_b
dvdrental-#     ON fruit_a = fruit_b
dvdrental-# WHERE b IS NULL;
 a | fruit_a  | b | fruit_b
---+----------+---+---------
 3 | Banana   |   |
 4 | Cucumber |   |
(2 rows)


dvdrental=# SELECT
dvdrental-#     a,
dvdrental-#     fruit_a,
dvdrental-#     b,
dvdrental-#     fruit_b
dvdrental-# FROM
dvdrental-#     basket_a
dvdrental-# RIGHT JOIN basket_b ON fruit_a = fruit_b;
 a | fruit_a | b |  fruit_b
---+---------+---+------------
 2 | Orange  | 1 | Orange
 1 | Apple   | 2 | Apple
   |         | 3 | Watermelon
   |         | 4 | Pear
(4 rows)


dvdrental=# SELECT
dvdrental-#     a,
dvdrental-#     fruit_a,
dvdrental-#     b,
dvdrental-#     fruit_b
dvdrental-# FROM
dvdrental-#     basket_a
dvdrental-# RIGHT JOIN basket_b
dvdrental-#    ON fruit_a = fruit_b
dvdrental-# WHERE a IS NULL;
 a | fruit_a | b |  fruit_b
---+---------+---+------------
   |         | 3 | Watermelon
   |         | 4 | Pear
(2 rows)


dvdrental=# SELECT
dvdrental-#     a,
dvdrental-#     fruit_a,
dvdrental-#     b,
dvdrental-#     fruit_b
dvdrental-# FROM
dvdrental-#     basket_a
dvdrental-# FULL OUTER JOIN basket_b
dvdrental-#     ON fruit_a = fruit_b;
 a | fruit_a  | b |  fruit_b
---+----------+---+------------
 1 | Apple    | 2 | Apple
 2 | Orange   | 1 | Orange
 3 | Banana   |   |
 4 | Cucumber |   |
   |          | 3 | Watermelon
   |          | 4 | Pear
(6 rows)


dvdrental=# SELECT
dvdrental-#     a,
dvdrental-#     fruit_a,
dvdrental-#     b,
dvdrental-#     fruit_b
dvdrental-# FROM
dvdrental-#     basket_a
dvdrental-# FULL JOIN basket_b
dvdrental-#    ON fruit_a = fruit_b
dvdrental-# WHERE a IS NULL OR b IS NULL;
 a | fruit_a  | b |  fruit_b
---+----------+---+------------
 3 | Banana   |   |
 4 | Cucumber |   |
   |          | 3 | Watermelon
   |          | 4 | Pear
(4 rows)


dvdrental=# SELECT
dvdrental-#    customer_id
dvdrental-# FROM
dvdrental-#    payment
dvdrental-# GROUP BY
dvdrental-#    customer_id;
 customer_id
-------------
         184
          87
         477
         273
         550
          51
         394
         272
          70
         190
         350
         539
         554
         278
         424
         406
         176
         576
         309
         292
         509
         271
          22
         156
         417
         556
         475
^Cdvdrental=# SELECT * FROM top_rated_films
dvdrental-# EXCEPT
dvdrental-# SELECT * FROM most_popular_films;
ERROR:  relation "top_rated_films" does not exist
LINE 1: SELECT * FROM top_rated_films
                      ^
dvdrental=# SELECT * FROM top_rated_films
dvdrental-# EXCEPT
dvdrental-# SELECT * FROM most_popular_films
dvdrental-# ORDER BY title;
ERROR:  relation "top_rated_films" does not exist
LINE 1: SELECT * FROM top_rated_films
                      ^
dvdrental=# SELECT
dvdrental-# customer_id,
dvdrental-# SUM (amount)
dvdrental-# FROM
dvdrental-# payment
dvdrental-# GROUP BY
dvdrental-# customer_id
dvdrental-# HAVING
dvdrental-# SUM (amount) > 200;
 customer_id |  sum
-------------+--------
         526 | 208.58
         148 | 211.55
(2 rows)


dvdrental=# INSERT INTO links (url, name)
dvdrental-# VALUES('https://www.postgresqltutorial.com','PostgreSQL Tutorial');
ERROR:  relation "links" does not exist
LINE 1: INSERT INTO links (url, name)
                    ^
dvdrental=# SELECT* FROM links;
ERROR:  relation "links" does not exist
LINE 1: SELECT* FROM links;
                     ^
dvdrental=# INSERT INTO links (url, name)
dvdrental-# VALUES('https://www.postgresqltutorial.com','PostgreSQL Tutorial');
ERROR:  relation "links" does not exist
LINE 1: INSERT INTO links (url, name)
                    ^
dvdrental=# DROP TABLE IF EXISTS links;
NOTICE:  table "links" does not exist, skipping
DROP TABLE
dvdrental=#
dvdrental=# CREATE TABLE links (
dvdrental(# id SERIAL PRIMARY KEY,
dvdrental(# url VARCHAR(255) NOT NULL,
dvdrental(# name VARCHAR(255) NOT NULL,
dvdrental(# description VARCHAR (255),
dvdrental(#         last_update DATE
dvdrental(# );
CREATE TABLE
dvdrental=# INSERT INTO links (url, name)
dvdrental-# VALUES('https://www.postgresqltutorial.com','PostgreSQL Tutorial');
INSERT 0 1
dvdrental=# SELECT* FROM links;
 id |                url                 |        name         | description | last_update
----+------------------------------------+---------------------+-------------+-------------
  1 | https://www.postgresqltutorial.com | PostgreSQL Tutorial |             |
(1 row)


dvdrental=# INSERT INTO
dvdrental-#     links (url, name)
dvdrental-# VALUES
dvdrental-#     ('https://www.google.com','Google'),
dvdrental-#     ('https://www.yahoo.com','Yahoo'),
dvdrental-#     ('https://www.bing.com','Bing');
INSERT 0 3
dvdrental=# SELECT * FROM links;
 id |                url                 |        name         | description | last_update
----+------------------------------------+---------------------+-------------+-------------
  1 | https://www.postgresqltutorial.com | PostgreSQL Tutorial |             |
  2 | https://www.google.com             | Google              |             |
  3 | https://www.yahoo.com              | Yahoo               |             |
  4 | https://www.bing.com               | Bing                |             |
(4 rows)


dvdrental=# SELECT * FROM links;Server [localhost]:
 id |                url                 |        name         | description | last_update
----+------------------------------------+---------------------+-------------+-------------
  1 | https://www.postgresqltutorial.com | PostgreSQL Tutorial |             |
  2 | https://www.google.com             | Google              |             |
  3 | https://www.yahoo.com              | Yahoo               |             |
  4 | https://www.bing.com               | Bing                |             |
(4 rows)


dvdrental-# Database [postgres]:
dvdrental-# Port [5432]:
dvdrental-# Username [postgres]:
dvdrental-# Password for user postgres:
dvdrental-# psql (13.2)
dvdrental-# WARNING: Console code page (437) differs from Windows code page (1252)
dvdrental-#          8-bit characters might not work correctly. See psql reference
dvdrental-#          page "Notes for Windows users" for details.
dvdrental-# Type "help" for help.
dvdrental-#
dvdrental-# postgres=# \l
                                         List of databases
   Name    |  Owner   | Encoding |      Collate       |       Ctype        |   Access privileges
-----------+----------+----------+--------------------+--------------------+-----------------------
 dvdrental | postgres | UTF8     | English_India.1252 | English_India.1252 |
 postgres  | postgres | UTF8     | English_India.1252 | English_India.1252 |
 template0 | postgres | UTF8     | English_India.1252 | English_India.1252 | =c/postgres          +
           |          |          |                    |                    | postgres=CTc/postgres
 template1 | postgres | UTF8     | English_India.1252 | English_India.1252 | =c/postgres          +
           |          |          |                    |                    | postgres=CTc/postgres
(4 rows)


dvdrental-#                                          List of databases
dvdrental-#    Name    |  Owner   | Encoding |      Collate       |       Ctype        |   Access privileges
dvdrental-# -----------+----------+----------+--------------------+--------------------+-----------------------
dvdrental-#  dvdrental | postgres | UTF8     | English_India.1252 | English_India.1252 |
dvdrental-#  postgres  | postgres | UTF8     | English_India.1252 | English_India.1252 |
dvdrental-#  template0 | postgres | UTF8     | English_India.1252 | English_India.1252 | =c/postgres          +
dvdrental-#            |          |          |                    |                    | postgres=CTc/postgres
dvdrental-#  template1 | postgres | UTF8     | English_India.1252 | English_India.1252 | =c/postgres          +
dvdrental-#            |          |          |                    |                    | postgres=CTc/postgres
dvdrental-# (4 rows)
dvdrental-#
dvdrental-#
dvdrental-# postgres=# \c dvdrental
You are now connected to database "dvdrental" as user "postgres".
dvdrental-# You are now connected to database "dvdrental" as user "postgres".
dvdrental-# dvdrental=# \dt
             List of relations
 Schema |     Name      | Type  |  Owner
--------+---------------+-------+----------
 public | actor         | table | postgres
 public | address       | table | postgres
 public | basket_a      | table | postgres
 public | basket_b      | table | postgres
 public | category      | table | postgres
 public | city          | table | postgres
 public | country       | table | postgres
 public | customer      | table | postgres
 public | film          | table | postgres
 public | film_actor    | table | postgres
 public | film_category | table | postgres
 public | inventory     | table | postgres
 public | language      | table | postgres
 public | links         | table | postgres
 public | payment       | table | postgres
 public | rental        | table | postgres
 public | staff         | table | postgres
 public | store         | table | postgres
(18 rows)


dvdrental-#              List of relations
dvdrental-#  Schema |     Name      | Type  |  Owner
dvdrental-# --------+---------------+-------+----------
dvdrental-#  public | actor         | table | postgres
dvdrental-#  public | address       | table | postgres
dvdrental-#  public | category      | table | postgres
dvdrental-#  public | city          | table | postgres
dvdrental-#  public | country       | table | postgres
dvdrental-#  public | customer      | table | postgres
dvdrental-#  public | film          | table | postgres
dvdrental-#  public | film_actor    | table | postgres
dvdrental-#  public | film_category | table | postgres
dvdrental-#  public | inventory     | table | postgres
dvdrental-#  public | language      | table | postgres
dvdrental-#  public | payment       | table | postgres
dvdrental-#  public | rental        | table | postgres
dvdrental-#  public | staff         | table | postgres
dvdrental-#  public | store         | table | postgres
dvdrental-# (15 rows)
dvdrental-#
dvdrental-#
dvdrental-# dvdrental=# SELECT first_name FROM customer;
ERROR:  syntax error at or near "Server"
LINE 1: Server [localhost]:
        ^
dvdrental=#  first_name
dvdrental-# -------------
dvdrental-#  Jared
dvdrental-#  Mary
dvdrental-#  Patricia
dvdrental-#  Linda
dvdrental-#  Barbara
dvdrental-#  Elizabeth
dvdrental-#  Jennifer
dvdrental-#  Maria
dvdrental-#  Susan
dvdrental-#  Margaret
dvdrental-#  Dorothy
dvdrental-#  Lisa
dvdrental-#  Nancy
dvdrental-#  Karen
dvdrental-#  Betty
dvdrental-#  Helen
dvdrental-#  Sandra
dvdrental-#  Donna
dvdrental-#  Carol
dvdrental-#  Ruth
dvdrental-#  Sharon
dvdrental-#  Michelle
dvdrental-#  Laura
dvdrental-#  Sarah
dvdrental-#  Kimberly
dvdrental-#  Deborah
dvdrental-#  Jessica
dvdrental-#  Shirley
dvdrental-#  Cynthia
dvdrental-#  Angela
dvdrental-#  Melissa
dvdrental-#  Brenda
dvdrental-#  Amy
dvdrental-#  Anna
dvdrental-#  Rebecca
dvdrental-#  Virginia
dvdrental-#  Kathleen
dvdrental-#  Pamela
dvdrental-#  Martha
dvdrental-#  Debra
dvdrental-#  Amanda
dvdrental-#  Stephanie
dvdrental-#  Carolyn
dvdrental-#  Christine
dvdrental-#  Marie
dvdrental-#  Janet
dvdrental-#  Catherine
dvdrental-#  Frances
dvdrental-#  Ann
dvdrental-#  Joyce
dvdrental-#  Diane
dvdrental-#  Alice
dvdrental-#  Julie
dvdrental-#  Heather
dvdrental-#  Teresa
dvdrental-#  Doris
dvdrental-#  Gloria
dvdrental-#  Evelyn
dvdrental-#  Jean
dvdrental-#  Cheryl
dvdrental-#  Mildred
dvdrental-#  Katherine
dvdrental-#  Joan
dvdrental-#  Ashley
dvdrental-#  Judith
dvdrental-#  Rose
dvdrental-#  Janice
dvdrental-#  Kelly
dvdrental-#  Nicole
dvdrental-#  Judy
dvdrental-#  Christina
dvdrental-#  Kathy
dvdrental-#  Theresa
dvdrental-#  Beverly
dvdrental-#  Denise
dvdrental-#  Tammy
dvdrental-#  Irene
dvdrental-#  Jane
dvdrental-#  Lori
dvdrental-#  Rachel
dvdrental-#  Marilyn
dvdrental-#  Andrea
dvdrental-#  Kathryn
dvdrental-#  Louise
dvdrental-#  Sara
dvdrental-#  Anne
dvdrental-#  Jacqueline
dvdrental-#  Wanda
dvdrental-#  Bonnie
dvdrental-#  Julia
dvdrental-#  Ruby
dvdrental-#  Lois
dvdrental-#  Tina
dvdrental-#  Phyllis
dvdrental-#  Norma
dvdrental-#  Paula
dvdrental-#  Diana
dvdrental-#  Annie
dvdrental-#  Lillian
dvdrental-#  Emily
dvdrental-#  Robin
dvdrental-#  Peggy
dvdrental-#  Crystal
dvdrental-#  Gladys
dvdrental-#  Rita
dvdrental-#  Dawn
dvdrental-#  Connie
dvdrental-#  Florence
dvdrental-#  Tracy
dvdrental-#  Edna
dvdrental-#  Tiffany
dvdrental-#  Carmen
dvdrental-#  Rosa
dvdrental-#  Cindy
dvdrental-#  Grace
dvdrental-#  Wendy
dvdrental-#  Victoria
dvdrental-#  Edith
dvdrental-#  Kim
dvdrental-#  Sherry
dvdrental-#  Sylvia
dvdrental-#  Josephine
dvdrental-#  Thelma
dvdrental-#  Shannon
dvdrental-#  Sheila
dvdrental-#  Ethel
dvdrental-#  Ellen
dvdrental-#  Elaine
dvdrental-#  Marjorie
dvdrental-#  Carrie
dvdrental-#  Charlotte
dvdrental-#  Monica
dvdrental-#  Esther
dvdrental-#  Pauline
dvdrental-#  Emma
dvdrental-#  Juanita
dvdrental-#  Anita
dvdrental-#  Rhonda
dvdrental-#  Hazel
dvdrental-#  Amber
dvdrental-#  Eva
dvdrental-#  Debbie
dvdrental-#  April
dvdrental-#  Leslie
dvdrental-#  Clara
dvdrental-#  Lucille
dvdrental-#  Jamie
dvdrental-#  Joanne
dvdrental-#  Eleanor
dvdrental-#  Valerie
dvdrental-#  Danielle
dvdrental-#  Megan
dvdrental-#  Alicia
dvdrental-#  Suzanne
dvdrental-#  Michele
dvdrental-#  Gail
dvdrental-#  Bertha
dvdrental-#  Darlene
dvdrental-#  Veronica
dvdrental-#  Jill
dvdrental-#  Erin
dvdrental-# ^Cdvdrental=# SELECT first_name, last_name FROM customer;
ERROR:  syntax error at or near "first_name"
LINE 1: first_name
        ^
dvdrental=#  first_name  |  last_name
dvdrental-# -------------+--------------
dvdrental-#  Jared       | Ely
dvdrental-#  Mary        | Smith
dvdrental-#  Patricia    | Johnson
dvdrental-#  Linda       | Williams
dvdrental-#  Barbara     | Jones
dvdrental-#  Elizabeth   | Brown
dvdrental-#  Jennifer    | Davis
dvdrental-#  Maria       | Miller
dvdrental-#  Susan       | Wilson
dvdrental-#  Margaret    | Moore
dvdrental-#  Dorothy     | Taylor
dvdrental-#  Lisa        | Anderson
dvdrental-#  Nancy       | Thomas
dvdrental-#  Karen       | Jackson
dvdrental-#  Betty       | White
dvdrental-#  Helen       | Harris
dvdrental-#  Sandra      | Martin
dvdrental-#  Donna       | Thompson
dvdrental-#  Carol       | Garcia
dvdrental-#  Ruth        | Martinez
dvdrental-#  Sharon      | Robinson
dvdrental-#  Michelle    | Clark
dvdrental-#  Laura       | Rodriguez
dvdrental-#  Sarah       | Lewis
dvdrental-#  Kimberly    | Lee
dvdrental-#  Deborah     | Walker
dvdrental-#  Jessica     | Hall
dvdrental-# ^Cdvdrental=# SELECT first_name, last_name FROM customer
dvdrental-# dvdrental-# SELECT first_name, last_name FROM customer ORDER BY first_name DESC;
ERROR:  syntax error at or near "first_name"
LINE 1: first_name  |  last_name
        ^
dvdrental=# ERROR:  syntax error at or near "SELECT"
dvdrental-# LINE 2: SELECT first_name, last_name FROM customer ORDER BY first_na...
dvdrental-#         ^
dvdrental-# dvdrental=# SELECT first_name, last_name FROM customer ORDER BY last_name DESC;
ERROR:  syntax error at or near "ERROR"
LINE 1: ERROR:  syntax error at or near "SELECT"
        ^
dvdrental=#  first_name  |  last_name
dvdrental-# -------------+--------------
dvdrental-#  Cynthia     | Young
dvdrental-#  Marvin      | Yee
dvdrental-#  Luis        | Yanez
dvdrental-#  Brian       | Wyman
dvdrental-#  Brenda      | Wright
dvdrental-#  Tyler       | Wren
dvdrental-#  Florence    | Woods
dvdrental-#  Lori        | Wood
dvdrental-#  Virgil      | Wofford
dvdrental-#  Darren      | Windham
dvdrental-#  Susan       | Wilson
dvdrental-#  Bernice     | Willis
dvdrental-#  Gina        | Williamson
dvdrental-#  Linda       | Williams
dvdrental-#  Jon         | Wiles
dvdrental-#  Roy         | Whiting
dvdrental-#  Betty       | White
dvdrental-#  Lucy        | Wheeler
dvdrental-#  Fred        | Wheat
dvdrental-#  Mitchell    | Westmoreland
dvdrental-#  Edna        | West
dvdrental-#  Sheila      | Wells
dvdrental-#  Marlene     | Welch
dvdrental-#  Ronald      | Weiner
dvdrental-#  Ethel       | Webb
dvdrental-#  Yolanda     | Weaver
dvdrental-#  Mike        | Way
dvdrental-# ^Cdvdrental=# select distinct first_name from customer;
ERROR:  syntax error at or near "first_name"
LINE 1: first_name  |  last_name
        ^
dvdrental=#  first_name
dvdrental-# -------------
dvdrental-#  Danny
dvdrental-#  Amber
dvdrental-#  Johnnie
dvdrental-#  Edward
dvdrental-#  Cindy
dvdrental-#  Amy
dvdrental-#  Earl
dvdrental-#  Rene
dvdrental-#  Geraldine
dvdrental-#  Carolyn
dvdrental-#  Nancy
dvdrental-#  Adrian
dvdrental-#  Ray
dvdrental-#  Kenneth
dvdrental-#  Mathew
dvdrental-#  Lydia
dvdrental-#  Jaime
dvdrental-#  Victoria
dvdrental-#  Carlos
dvdrental-#  Grace
dvdrental-#  Tammy
dvdrental-#  Steve
dvdrental-#  Vernon
dvdrental-#  Justin
dvdrental-#  Susan
dvdrental-#  Tony
dvdrental-#  Wayne
dvdrental-# ^Cdvdrental=# select last_name, first_name from customer where first_name = 'jamie';
ERROR:  syntax error at or near "first_name"
LINE 1: first_name
        ^
dvdrental=#  last_name | first_name
dvdrental-# -----------+------------
dvdrental-# (0 rows)
dvdrental-#
dvdrental-#
dvdrental-# dvdrental=# select last_name, first_name from customer where first_name = 'Jamie';
ERROR:  syntax error at or near "last_name"
LINE 1: last_name | first_name
        ^
dvdrental=#  last_name | first_name
dvdrental-# -----------+------------
dvdrental-#  Rice      | Jamie
dvdrental-#  Waugh     | Jamie
dvdrental-# (2 rows)
dvdrental-#
dvdrental-#
dvdrental-# dvdrental=# select last_name, first_name from customer order by last_name limit 5;
ERROR:  syntax error at or near "last_name"
LINE 1: last_name | first_name
        ^
dvdrental=#  last_name | first_name
dvdrental-# -----------+------------
dvdrental-#  Abney     | Rafael
dvdrental-#  Adam      | Nathaniel
dvdrental-#  Adams     | Kathleen
dvdrental-#  Alexander | Diana
dvdrental-#  Allard    | Gordon
dvdrental-# (5 rows)
dvdrental-#
dvdrental-#
dvdrental-# dvdrental=# SELECT customer_id,
dvdrental-# dvdrental-# rental_id,
dvdrental-# dvdrental-# return_date
dvdrental-# dvdrental-# FROM
dvdrental-# dvdrental-# rental
dvdrental-# dvdrental-# WHERE
dvdrental-# dvdrental-# customer_id IN (1, 2)
dvdrental-# dvdrental-# ORDER BY
dvdrental-# dvdrental-# return_date DESC;
ERROR:  syntax error at or near "last_name"
LINE 1: last_name | first_name
        ^
dvdrental=#  customer_id | rental_id |     return_date
dvdrental-# -------------+-----------+---------------------
dvdrental-#            2 |     15145 | 2005-08-31 15:51:04
dvdrental-#            1 |     15315 | 2005-08-30 01:51:46
dvdrental-#            2 |     14743 | 2005-08-29 00:18:56
dvdrental-#            1 |     15298 | 2005-08-28 22:49:37
dvdrental-#            2 |     14475 | 2005-08-27 08:59:32
dvdrental-#            1 |     14825 | 2005-08-27 07:01:57
dvdrental-#            2 |     15907 | 2005-08-25 23:23:35
dvdrental-#            2 |     12963 | 2005-08-23 11:37:04
dvdrental-#            1 |     13176 | 2005-08-23 08:50:54
dvdrental-#            1 |     14762 | 2005-08-23 01:30:57
dvdrental-#            1 |     12250 | 2005-08-22 23:05:29
dvdrental-#            1 |     13068 | 2005-08-20 14:44:16
dvdrental-#            2 |     11614 | 2005-08-20 07:04:18
dvdrental-#            1 |     11824 | 2005-08-19 10:11:54
dvdrental-#            1 |     11299 | 2005-08-10 16:40:52
dvdrental-#            1 |     10437 | 2005-08-10 12:12:04
dvdrental-#            2 |     11177 | 2005-08-10 10:55:48
dvdrental-#            2 |     11087 | 2005-08-10 10:37:41
dvdrental-#            2 |      9236 | 2005-08-08 18:52:43
dvdrental-#            2 |      9296 | 2005-08-08 11:57:13
dvdrental-#            2 |      8230 | 2005-08-06 19:52:59
dvdrental-#            2 |      9465 | 2005-08-06 16:43:53
dvdrental-#            2 |     10466 | 2005-08-06 06:28:26
dvdrental-#            2 |      9248 | 2005-08-05 11:19:11
dvdrental-#            2 |     11256 | 2005-08-04 16:39:53
dvdrental-#            1 |     11367 | 2005-08-04 13:19:38
dvdrental-#            2 |      9031 | 2005-08-04 10:45:10
dvdrental-# ^Cdvdrental=# SELECT
dvdrental-# dvdrental-# customer_id,
dvdrental-# dvdrental-# payment_id,
dvdrental-# dvdrental-# amount
dvdrental-# dvdrental-# FROM
dvdrental-# dvdrental-# payment
dvdrental-# dvdrental-# WHERE
dvdrental-# dvdrental-# amount BETWEEN 8 AND 9;
ERROR:  syntax error at or near "customer_id"
LINE 1: customer_id | rental_id |     return_date
        ^
dvdrental=#  customer_id | payment_id | amount
dvdrental-# -------------+------------+--------
dvdrental-#          343 |      17517 |   8.99
dvdrental-#          347 |      17529 |   8.99
dvdrental-#          347 |      17532 |   8.99
dvdrental-#          348 |      17535 |   8.99
dvdrental-#          349 |      17540 |   8.99
dvdrental-#          379 |      17648 |   8.99
dvdrental-#          403 |      17747 |   8.99
dvdrental-#          409 |      17775 |   8.99
dvdrental-#          423 |      17817 |   8.99
dvdrental-#          431 |      17853 |   8.99
dvdrental-#          442 |      17886 |   8.99
dvdrental-#          465 |      17990 |   8.99
dvdrental-#          466 |      17993 |   8.99
dvdrental-#          467 |      17997 |   8.99
dvdrental-#          468 |      18002 |   8.99
dvdrental-#          474 |      18027 |   8.99
dvdrental-#          478 |      18040 |   8.99
dvdrental-#          483 |      18059 |   8.99
dvdrental-#          485 |      18065 |   8.99
dvdrental-#          497 |      18099 |   8.99
dvdrental-#          510 |      18146 |   8.99
dvdrental-#          510 |      18149 |   8.99
dvdrental-#          517 |      18180 |   8.99
dvdrental-#          519 |      18187 |   8.99
dvdrental-#          522 |      18195 |   8.99
dvdrental-#          523 |      18199 |   8.99
dvdrental-#          537 |      18248 |   8.99
dvdrental-# ^Cdvdrental=# SELECT
dvdrental-# dvdrental-# first_name,
dvdrental-# dvdrental-#         last_name
dvdrental-# dvdrental-# FROM
dvdrental-# dvdrental-# customer
dvdrental-# dvdrental-# WHERE
dvdrental-# dvdrental-# first_name LIKE 'Jen%';
ERROR:  syntax error at or near "customer_id"
LINE 1: customer_id | payment_id | amount
        ^
dvdrental=#  first_name | last_name
dvdrental-# ------------+-----------
dvdrental-#  Jennifer   | Davis
dvdrental-#  Jennie     | Terry
dvdrental-#  Jenny      | Castro
dvdrental-# (3 rows)
dvdrental-#
dvdrental-#
dvdrental-# dvdrental=# CREATE TABLE basket_a (
dvdrental(# dvdrental(#     a INT PRIMARY KEY,
dvdrental(# dvdrental(#     fruit_a VARCHAR (100) NOT NULL
dvdrental(# dvdrental(# );
dvdrental(# CREATE TABLE
dvdrental(# dvdrental=#
dvdrental(# dvdrental=# CREATE TABLE basket_b (
dvdrental(# dvdrental(#     b INT PRIMARY KEY,
dvdrental(# dvdrental(#     fruit_b VARCHAR (100) NOT NULL
dvdrental(# dvdrental(# );
dvdrental(# CREATE TABLE
dvdrental(# dvdrental=#
dvdrental(# dvdrental=# INSERT INTO basket_a (a, fruit_a)
dvdrental(# dvdrental-# VALUES
dvdrental(# dvdrental-#     (1, 'Apple'),
dvdrental(# dvdrental-#     (2, 'Orange'),
dvdrental(# dvdrental-#     (3, 'Banana'),
dvdrental(# dvdrental-#     (4, 'Cucumber');
dvdrental(# INSERT 0 4
dvdrental(# dvdrental=#
dvdrental(# dvdrental=# INSERT INTO basket_b (b, fruit_b)
dvdrental(# dvdrental-# VALUES
dvdrental(# dvdrental-#     (1, 'Orange'),
dvdrental(# dvdrental-#     (2, 'Apple'),
dvdrental(# dvdrental-#     (3, 'Watermelon'),
dvdrental(# dvdrental-#     (4, 'Pear');
dvdrental(# INSERT 0 4
dvdrental(# dvdrental=# SELECT
dvdrental(# dvdrental-#     a,
dvdrental(# dvdrental-#     fruit_a,
dvdrental(# dvdrental-#     b,
dvdrental(# dvdrental-#     fruit_b
dvdrental(# dvdrental-# FROM
dvdrental(# dvdrental-#     basket_a
dvdrental(# dvdrental-# INNER JOIN basket_b
dvdrental(# dvdrental-#     ON fruit_a = fruit_b;
dvdrental(#  a | fruit_a | b | fruit_b
dvdrental(# ---+---------+---+---------
dvdrental(#  1 | Apple   | 2 | Apple
dvdrental(#  2 | Orange  | 1 | Orange
dvdrental(# (2 rows)
dvdrental(#
dvdrental(#
dvdrental(# dvdrental=# SELECT
dvdrental(# dvdrental-#     a,
dvdrental(# dvdrental-#     fruit_a,
dvdrental(# dvdrental-#     b,
dvdrental(# dvdrental-#     fruit_b
dvdrental(# dvdrental-# FROM
dvdrental(# dvdrental-#     basket_a
dvdrental(# dvdrental-# LEFT JOIN basket_b
dvdrental(# dvdrental-#    ON fruit_a = fruit_b;
dvdrental(#  a | fruit_a  | b | fruit_b
dvdrental(# ---+----------+---+---------
dvdrental(#  1 | Apple    | 2 | Apple
dvdrental(#  2 | Orange   | 1 | Orange
dvdrental(#  3 | Banana   |   |
dvdrental(#  4 | Cucumber |   |
dvdrental(# (4 rows)
dvdrental(#
dvdrental(#
dvdrental(# dvdrental=# SELECT
dvdrental(# dvdrental-#     a,
dvdrental(# dvdrental-#     fruit_a,
dvdrental(# dvdrental-#     b,
dvdrental(# dvdrental-#     fruit_b
dvdrental(# dvdrental-# FROM
dvdrental(# dvdrental-#     basket_a
dvdrental(# dvdrental-# LEFT JOIN basket_b
dvdrental(# dvdrental-#     ON fruit_a = fruit_b
dvdrental(# dvdrental-# WHERE b IS NULL;
dvdrental(#  a | fruit_a  | b | fruit_b
dvdrental(# ---+----------+---+---------
dvdrental(#  3 | Banana   |   |
dvdrental(#  4 | Cucumber |   |
dvdrental(# (2 rows)
dvdrental(#
dvdrental(#
dvdrental(# dvdrental=# SELECT
dvdrental(# dvdrental-#     a,
dvdrental(# dvdrental-#     fruit_a,
dvdrental(# dvdrental-#     b,
dvdrental(# dvdrental-#     fruit_b
dvdrental(# dvdrental-# FROM
dvdrental(# dvdrental-#     basket_a
dvdrental(# dvdrental-# RIGHT JOIN basket_b ON fruit_a = fruit_b;
dvdrental(#  a | fruit_a | b |  fruit_b
dvdrental(# ---+---------+---+------------
dvdrental(#  2 | Orange  | 1 | Orange
dvdrental(#  1 | Apple   | 2 | Apple
dvdrental(#    |         | 3 | Watermelon
dvdrental(#    |         | 4 | Pear
dvdrental(# (4 rows)
dvdrental(#
dvdrental(#
dvdrental(# dvdrental=# SELECT
dvdrental(# dvdrental-#     a,
dvdrental(# dvdrental-#     fruit_a,
dvdrental(# dvdrental-#     b,
dvdrental(# dvdrental-#     fruit_b
dvdrental(# dvdrental-# FROM
dvdrental(# dvdrental-#     basket_a
dvdrental(# dvdrental-# RIGHT JOIN basket_b
dvdrental(# dvdrental-#    ON fruit_a = fruit_b
dvdrental(# dvdrental-# WHERE a IS NULL;
dvdrental(#  a | fruit_a | b |  fruit_b
dvdrental(# ---+---------+---+------------
dvdrental(#    |         | 3 | Watermelon
dvdrental(#    |         | 4 | Pear
dvdrental(# (2 rows)
dvdrental(#
dvdrental(#
dvdrental(# dvdrental=# SELECT
dvdrental(# dvdrental-#     a,
dvdrental(# dvdrental-#     fruit_a,
dvdrental(# dvdrental-#     b,
dvdrental(# dvdrental-#     fruit_b
dvdrental(# dvdrental-# FROM
dvdrental(# dvdrental-#     basket_a
dvdrental(# dvdrental-# FULL OUTER JOIN basket_b
dvdrental(# dvdrental-#     ON fruit_a = fruit_b;
dvdrental(#  a | fruit_a  | b |  fruit_b
dvdrental(# ---+----------+---+------------
dvdrental(#  1 | Apple    | 2 | Apple
dvdrental(#  2 | Orange   | 1 | Orange
dvdrental(#  3 | Banana   |   |
dvdrental(#  4 | Cucumber |   |
dvdrental(#    |          | 3 | Watermelon
dvdrental(#    |          | 4 | Pear
dvdrental(# (6 rows)
dvdrental(#
dvdrental(#
dvdrental(# dvdrental=# SELECT
dvdrental(# dvdrental-#     a,
dvdrental(# dvdrental-#     fruit_a,
dvdrental(# dvdrental-#     b,
dvdrental(# dvdrental-#     fruit_b
dvdrental(# dvdrental-# FROM
dvdrental(# dvdrental-#     basket_a
dvdrental(# dvdrental-# FULL JOIN basket_b
dvdrental(# dvdrental-#    ON fruit_a = fruit_b
dvdrental(# dvdrental-# WHERE a IS NULL OR b IS NULL;
dvdrental(#  a | fruit_a  | b |  fruit_b
dvdrental(# ---+----------+---+------------
dvdrental(#  3 | Banana   |   |
dvdrental(#  4 | Cucumber |   |
dvdrental(#    |          | 3 | Watermelon
dvdrental(#    |          | 4 | Pear
dvdrental(# (4 rows)
dvdrental(#
dvdrental(#
dvdrental(# dvdrental=# SELECT
dvdrental(# dvdrental-#    customer_id
dvdrental(# dvdrental-# FROM
dvdrental(# dvdrental-#    payment
dvdrental(# dvdrental-# GROUP BY
dvdrental(# dvdrental-#    customer_id;
dvdrental(#  customer_id
dvdrental(# -------------
dvdrental(#          184
dvdrental(#           87
dvdrental(#          477
dvdrental(#          273
dvdrental(#          550
dvdrental(#           51
dvdrental(#          394
dvdrental(#          272
dvdrental(#           70
dvdrental(#          190
dvdrental(#          350
dvdrental(#          539
dvdrental(#          554
dvdrental(#          278
dvdrental(#          424
dvdrental(#          406
dvdrental(#          176
dvdrental(#          576
dvdrental(#          309
dvdrental(#          292
dvdrental(#          509
dvdrental(#          271
dvdrental(#           22
dvdrental(#          156
dvdrental(#          417
dvdrental(#          556
dvdrental(#          475
dvdrental(# ^Cdvdrental=# SELECT * FROM top_rated_films
dvdrental(# dvdrental-# EXCEPT
dvdrental(# dvdrental-# SELECT * FROM most_popular_films;
dvdrental(# ERROR:  relation "top_rated_films" does not exist
dvdrental(# LINE 1: SELECT * FROM top_rated_films
dvdrental(#                       ^
dvdrental(# dvdrental=# SELECT * FROM top_rated_films
dvdrental(# dvdrental-# EXCEPT
dvdrental(# dvdrental-# SELECT * FROM most_popular_films
dvdrental(# dvdrental-# ORDER BY title;
dvdrental(# ERROR:  relation "top_rated_films" does not exist
dvdrental(# LINE 1: SELECT * FROM top_rated_films
dvdrental(#                       ^
dvdrental(# dvdrental=# SELECT
dvdrental(# dvdrental-# customer_id,
dvdrental(# dvdrental-# SUM (amount)
dvdrental(# dvdrental-# FROM
dvdrental(# dvdrental-# payment
dvdrental(# dvdrental-# GROUP BY
dvdrental(# dvdrental-# customer_id
dvdrental(# dvdrental-# HAVING
dvdrental(# dvdrental-# SUM (amount) > 200;
dvdrental(#  customer_id |  sum
dvdrental(# -------------+--------
dvdrental(#          526 | 208.58
dvdrental(#          148 | 211.55
dvdrental(# (2 rows)
dvdrental(#
dvdrental(#
dvdrental(# dvdrental=# INSERT INTO links (url, name)
dvdrental(# dvdrental-# VALUES('https://www.postgresqltutorial.com','PostgreSQL Tutorial');
dvdrental(# ERROR:  relation "links" does not exist
dvdrental(# LINE 1: INSERT INTO links (url, name)
dvdrental(#                     ^
dvdrental(# dvdrental=# SELECT* FROM links;
dvdrental(# ERROR:  relation "links" does not exist
dvdrental(# LINE 1: SELECT* FROM links;
dvdrental(#                      ^
dvdrental(# dvdrental=# INSERT INTO links (url, name)
dvdrental(# dvdrental-# VALUES('https://www.postgresqltutorial.com','PostgreSQL Tutorial');
dvdrental(# ERROR:  relation "links" does not exist
dvdrental(# LINE 1: INSERT INTO links (url, name)
dvdrental(#                     ^
dvdrental(# dvdrental=# DROP TABLE IF EXISTS links;
dvdrental(# NOTICE:  table "links" does not exist, skipping
dvdrental(# DROP TABLE
dvdrental(# dvdrental=#
dvdrental(# dvdrental=# CREATE TABLE links (
dvdrental(# dvdrental(# id SERIAL PRIMARY KEY,
dvdrental(# dvdrental(# url VARCHAR(255) NOT NULL,
dvdrental(# dvdrental(# name VARCHAR(255) NOT NULL,
dvdrental(# dvdrental(# description VARCHAR (255),
dvdrental(# dvdrental(#         last_update DATE
dvdrental(# dvdrental(# );
dvdrental(# CREATE TABLE
dvdrental(# dvdrental=# INSERT INTO links (url, name)
dvdrental(# dvdrental-# VALUES('https://www.postgresqltutorial.com','PostgreSQL Tutorial');
dvdrental(# INSERT 0 1
dvdrental(# dvdrental=# SELECT* FROM links;
dvdrental(#  id |                url                 |        name         | description | last_update
dvdrental(# ----+------------------------------------+---------------------+-------------+-------------
dvdrental(#   1 | https://www.postgresqltutorial.com | PostgreSQL Tutorial |             |
dvdrental(# (1 row)
dvdrental(#
dvdrental(#
dvdrental(# dvdrental=# INSERT INTO
dvdrental(# dvdrental-#     links (url, name)
dvdrental(# dvdrental-# VALUES
dvdrental(# dvdrental-#     ('https://www.google.com','Google'),
dvdrental(# dvdrental-#     ('https://www.yahoo.com','Yahoo'),
dvdrental(# dvdrental-#     ('https://www.bing.com','Bing');
dvdrental(# INSERT 0 3
dvdrental(# dvdrental=# SELECT * FROM links;
dvdrental(#  id |                url                 |        name         | description | last_update
dvdrental(# ----+------------------------------------+---------------------+-------------+-------------
dvdrental(#   1 | https://www.postgresqltutorial.com | PostgreSQL Tutorial |             |
dvdrental(#   2 | https://www.google.com             | Google              |             |
dvdrental(#   3 | https://www.yahoo.com              | Yahoo               |             |
dvdrental(#   4 | https://www.bing.com               | Bing                |             |
dvdrental(# (4 rows)
dvdrental(#
dvdrental(#
dvdrental(# dvdrental=# SELECT * FROM links;