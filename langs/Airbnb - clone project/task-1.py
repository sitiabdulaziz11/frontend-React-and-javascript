#!/usr/bin/python3

from cmd import Cmd

class HBN(Cmd):

    prom = "hbnb"
    
    def __init__(self):
        super().__init__()

    def do_help(self, args):
        pass
   
    def do_EOF(self, line):
        return True
    
    def do_quit(self, args):
        return True
    
if __name__ =="__main__":
    HBN().cmdloop()