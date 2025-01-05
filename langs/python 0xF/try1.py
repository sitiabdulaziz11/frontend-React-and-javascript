import MySQLdb

def mysqlconnect():
    try:
        db_con= MySQLdb.connect
        ('Hostname', 'abuname', 'password', 'dbname')
    except:
        print('Can\'t connect to database')
        return 0
    print('connected')

    cur=db_con.cursor()

    cur.execute("SELECT CURDATE();")
    m = cur.fetchone()
    print("Today's Data is", m[0])

    db_con.close()
mysqlconnect()