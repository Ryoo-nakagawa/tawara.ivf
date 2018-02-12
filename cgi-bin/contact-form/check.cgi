#!/usr/bin/perl

#┌─────────────────────────────────
#│ POST-MAIL : check.cgi - 2012/12/30
#│ copyright (c) KentWeb
#│ http://www.kent-web.com/
#└─────────────────────────────────

# モジュール宣言
use strict;
use CGI::Carp qw(fatalsToBrowser);

# 外部ファイル取り込み
require './init.cgi';
my %cf = &init;

print <<EOM;
Content-type: text/html; charset=shift_jis

<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=shift_jis">
<title>Check Mode</title>
</head>
<body>
<b>Check Mode: [ $cf{version} ]</b>
<ul>
<li>Perlバージョン : $]
EOM

# ログファイル
my %log = (logfile => 'ログファイル', sesfile => 'セッションファイル');
foreach ( keys %log ) {
	if (-f $cf{$_}) {
		print "<li>$log{$_} : OK\n";

		if (-r $cf{$_} && -w $cf{$_}) {
			print "<li>$log{$_} : OK\n";
		} else {
			print "<li>$log{$_} : NG\n";
		}
	} else {
		print "<li>$log{$_} : NG\n";
	}
}

# メールソフトチェック
print "<li>sendmailパス : ";
if (-e $cf{sendmail}) {
	print "OK\n";
} else {
	print "NG\n";
}

# テンプレート
my @tmpl = qw|conf.html err1.html err2.html thx.html mail.txt reply.txt|;
foreach (@tmpl) {
	print "<li>テンプレート ( $_ ) : ";

	if (-f "$cf{tmpldir}/$_") {
		print "パスOK\n";
	} else {
		print "パスNG\n";
	}
}

print <<EOM;
</ul>
</body>
</html>
EOM
exit;

