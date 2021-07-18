# #!/usr/bin/bash

PDF_DIR="pdfs"
CARD_DIR="cards"
TMP_DIR="/tmp/two-rooms-helper"
N_CARDS=0
CARD_DIMENSIONS="1330x2050"
mkdir -p "$CARD_DIR"
mkdir -p "$TMP_DIR"

PDF_FILES=`ls $PDF_DIR/*.pdf`
for PDF_FILE in $PDF_FILES
do
	OUT_FILE=`echo "$PDF_FILE" | sed "s/.*\///" | sed "s/\.pdf/.jpg/"`
	LARGE_OUT=`echo "$TMP_DIR/$OUT_FILE"`
	convert -density 600 -colorspace rgb "$PDF_FILE" "$LARGE_OUT"
	for OFFSETS in "+375+375" "+1860+375" "+3345+375" "+4825+375" "+375+2675" "+1860+2675" "+3345+2675" "+4825+2675"
	do
		N_CARDS=`expr $N_CARDS + 1`
		CARD_FILE=`printf "$CARD_DIR/%03d.jpg" $N_CARDS`
		convert "$LARGE_OUT" -crop "$CARD_DIMENSIONS$OFFSETS" "$CARD_FILE"
		echo -n .
	done
	rm $LARGE_OUT
done
echo
