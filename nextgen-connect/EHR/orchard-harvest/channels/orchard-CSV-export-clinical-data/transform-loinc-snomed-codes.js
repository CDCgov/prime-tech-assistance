var loinc = validate(msg['row'][i]['column14'].toString(), '', new Array());
var loincDesc = validate(msg['row'][i]['column15'].toString(), '', new Array());
var snomed = validate(msg['row'][i]['column16'].toString(), '', new Array());
var snomedDesc = validate(msg['row'][i]['column12'].toString(), '', new Array());

// Change the LOINC description for specific LOINC
if(loinc == '95941-1') {
	loincDesc = 'FLUABV+SARS-CoV-2+RSV Pnl Resp NAA+probe';
	//Update the SNOMED codes as needed

	// Change the SNOMED description per FLDOH requirements
	// Positive result
	if(snomed == '840533007') {
		snomedDesc = 'SC2 RNA detected';
	} 
	// Negative result
	else if(snomed == '260385009') {
		snomedDesc = 'Negative';
	}
	// Not detected result
	else if(snomed == '260415000') {
		snomedDesc = 'Not detected';
	}
}

// This needs to be in order as the column name does not set the output order
tmp['row'][i]['column12'] = snomedDesc;
tmp['row'][i]['column13'] = validate(msg['row'][i]['column13'].toString(), '', new Array()); // Appr Date
tmp['row'][i]['column14'] = loinc;
tmp['row'][i]['column15'] = loincDesc;
tmp['row'][i]['column16'] = snomed;