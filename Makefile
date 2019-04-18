zip:
	rm -f lichessARC.zip
	zip -r -FS lichessARC.zip * \
	--exclude *.git* \
	--exclude pictures/ \
	--exclude pictures/* \
	--exclude *.md \
	--exclude Makefile
	unzip -l lichessARC.zip