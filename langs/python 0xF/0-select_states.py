#!/usr/bin/python3
import MySQLdb
import sys

if __name__ =="__main__":
    # user, passwd, db = sys.argv[1:4]
    db = MySQLdb.connect(host="localhost", port=3306, user=sys.argv[2], passwd=sys.argv[3], db="sys.argv[4]")
    cu = db.cursor()
    cu.execute("SELECT * FROM states ORDER BY id ASC")

    for row in cu.fetchall():
        print(row)
