( function( QUnit ) {

QUnit.module( "resetActivePageHeight()" );

var index,
	toolbars = {
		external: {
			header: $( "#external-header" ).remove(),
			footer: $( "#external-footer" ).remove(),
		},
		internal: {
			header: $( "#internal-header" ).remove(),
			footer: $( "#internal-footer" ).remove()
		}
	},
	page = $( "#page" ).remove(),

	expectedResult = {
		0: 425,
		1: 392,
		3: 425,
		5: 392,
		7: 425,
		8: 388,
		9: 355,
		11: 388,
		13: 355,
		15: 388,
		24: 425,
		25: 392,
		27: 425,
		29: 392,
		31: 425,
		40: 388,
		41: 355,
		43: 388,
		45: 355,
		47: 388,
		56: 425,
		57: 392,
		59: 425,
		61: 392,
		63: 425,
		64: 425,
		65: 425,
		67: 425,
		69: 425,
		71: 425,
		72: 388,
		73: 388,
		75: 388,
		77: 388,
		79: 388,
		88: 425,
		89: 425,
		91: 425,
		93: 425,
		95: 425,
		104: 388,
		105: 388,
		107: 388,
		109: 388,
		111: 388,
		120: 425,
		121: 425,
		123: 425,
		125: 425,
		127: 425,
		192: 425,
		193: 425,
		195: 425,
		197: 425,
		199: 425,
		200: 388,
		201: 388,
		203: 388,
		205: 388,
		207: 388,
		216: 425,
		217: 425,
		219: 425,
		221: 425,
		223: 425,
		232: 388,
		233: 388,
		235: 388,
		237: 388,
		239: 388,
		248: 425,
		249: 425,
		251: 425,
		253: 425,
		255: 425,
		320: 425,
		321: 425,
		323: 425,
		325: 425,
		327: 425,
		328: 388,
		329: 388,
		331: 388,
		333: 388,
		335: 388,
		344: 425,
		345: 425,
		347: 425,
		349: 425,
		351: 425,
		360: 388,
		361: 388,
		363: 388,
		365: 388,
		367: 388,
		376: 425,
		377: 425,
		379: 425,
		381: 425,
		383: 425,
		448: 425,
		449: 425,
		451: 425,
		453: 425,
		455: 425,
		456: 388,
		457: 388,
		459: 388,
		461: 388,
		463: 388,
		472: 425,
		473: 425,
		475: 425,
		477: 425,
		479: 425,
		488: 388,
		489: 388,
		491: 388,
		493: 388,
		495: 388,
		504: 425,
		505: 425,
		507: 425,
		509: 425,
		511: 425,
		512: 425,
		513: 392,
		515: 425,
		517: 392,
		519: 425,
		520: 425,
		521: 392,
		523: 425,
		525: 392,
		527: 425,
		536: 425,
		537: 392,
		539: 425,
		541: 392,
		543: 425,
		552: 425,
		553: 392,
		555: 425,
		557: 392,
		559: 425,
		568: 425,
		569: 392,
		571: 425,
		573: 392,
		575: 425,
		576: 425,
		577: 425,
		579: 425,
		581: 425,
		583: 425,
		584: 425,
		585: 425,
		587: 425,
		589: 425,
		591: 425,
		600: 425,
		601: 425,
		603: 425,
		605: 425,
		607: 425,
		616: 425,
		617: 425,
		619: 425,
		621: 425,
		623: 425,
		632: 425,
		633: 425,
		635: 425,
		637: 425,
		639: 425,
		704: 425,
		705: 425,
		707: 425,
		709: 425,
		711: 425,
		712: 425,
		713: 425,
		715: 425,
		717: 425,
		719: 425,
		728: 425,
		729: 425,
		731: 425,
		733: 425,
		735: 425,
		744: 425,
		745: 425,
		747: 425,
		749: 425,
		751: 425,
		760: 425,
		761: 425,
		763: 425,
		765: 425,
		767: 425,
		832: 425,
		833: 425,
		835: 425,
		837: 425,
		839: 425,
		840: 425,
		841: 425,
		843: 425,
		845: 425,
		847: 425,
		856: 425,
		857: 425,
		859: 425,
		861: 425,
		863: 425,
		872: 425,
		873: 425,
		875: 425,
		877: 425,
		879: 425,
		888: 425,
		889: 425,
		891: 425,
		893: 425,
		895: 425,
		960: 425,
		961: 425,
		963: 425,
		965: 425,
		967: 425,
		968: 425,
		969: 425,
		971: 425,
		973: 425,
		975: 425,
		984: 425,
		985: 425,
		987: 425,
		989: 425,
		991: 425,
		1000: 425,
		1001: 425,
		1003: 425,
		1005: 425,
		1007: 425,
		1016: 425,
		1017: 425,
		1019: 425,
		1021: 425,
		1023: 425,
		1536: 425,
		1537: 392,
		1539: 425,
		1541: 392,
		1543: 425,
		1544: 425,
		1545: 392,
		1547: 425,
		1549: 392,
		1551: 425,
		1560: 425,
		1561: 392,
		1563: 425,
		1565: 392,
		1567: 425,
		1576: 425,
		1577: 392,
		1579: 425,
		1581: 392,
		1583: 425,
		1592: 425,
		1593: 392,
		1595: 425,
		1597: 392,
		1599: 425,
		1600: 425,
		1601: 425,
		1603: 425,
		1605: 425,
		1607: 425,
		1608: 425,
		1609: 425,
		1611: 425,
		1613: 425,
		1615: 425,
		1624: 425,
		1625: 425,
		1627: 425,
		1629: 425,
		1631: 425,
		1640: 425,
		1641: 425,
		1643: 425,
		1645: 425,
		1647: 425,
		1656: 425,
		1657: 425,
		1659: 425,
		1661: 425,
		1663: 425,
		1728: 425,
		1729: 425,
		1731: 425,
		1733: 425,
		1735: 425,
		1736: 425,
		1737: 425,
		1739: 425,
		1741: 425,
		1743: 425,
		1752: 425,
		1753: 425,
		1755: 425,
		1757: 425,
		1759: 425,
		1768: 425,
		1769: 425,
		1771: 425,
		1773: 425,
		1775: 425,
		1784: 425,
		1785: 425,
		1787: 425,
		1789: 425,
		1791: 425,
		1856: 425,
		1857: 425,
		1859: 425,
		1861: 425,
		1863: 425,
		1864: 425,
		1865: 425,
		1867: 425,
		1869: 425,
		1871: 425,
		1880: 425,
		1881: 425,
		1883: 425,
		1885: 425,
		1887: 425,
		1896: 425,
		1897: 425,
		1899: 425,
		1901: 425,
		1903: 425,
		1912: 425,
		1913: 425,
		1915: 425,
		1917: 425,
		1919: 425,
		1984: 425,
		1985: 425,
		1987: 425,
		1989: 425,
		1991: 425,
		1992: 425,
		1993: 425,
		1995: 425,
		1997: 425,
		1999: 425,
		2008: 425,
		2009: 425,
		2011: 425,
		2013: 425,
		2015: 425,
		2024: 425,
		2025: 425,
		2027: 425,
		2029: 425,
		2031: 425,
		2040: 425,
		2041: 425,
		2043: 425,
		2045: 425,
		2047: 425,
		2560: 425,
		2561: 392,
		2563: 425,
		2565: 392,
		2567: 425,
		2568: 425,
		2569: 392,
		2571: 425,
		2573: 392,
		2575: 425,
		2584: 425,
		2585: 392,
		2587: 425,
		2589: 392,
		2591: 425,
		2600: 425,
		2601: 392,
		2603: 425,
		2605: 392,
		2607: 425,
		2616: 425,
		2617: 392,
		2619: 425,
		2621: 392,
		2623: 425,
		2624: 425,
		2625: 425,
		2627: 425,
		2629: 425,
		2631: 425,
		2632: 425,
		2633: 425,
		2635: 425,
		2637: 425,
		2639: 425,
		2648: 425,
		2649: 425,
		2651: 425,
		2653: 425,
		2655: 425,
		2664: 425,
		2665: 425,
		2667: 425,
		2669: 425,
		2671: 425,
		2680: 425,
		2681: 425,
		2683: 425,
		2685: 425,
		2687: 425,
		2752: 425,
		2753: 425,
		2755: 425,
		2757: 425,
		2759: 425,
		2760: 425,
		2761: 425,
		2763: 425,
		2765: 425,
		2767: 425,
		2776: 425,
		2777: 425,
		2779: 425,
		2781: 425,
		2783: 425,
		2792: 425,
		2793: 425,
		2795: 425,
		2797: 425,
		2799: 425,
		2808: 425,
		2809: 425,
		2811: 425,
		2813: 425,
		2815: 425,
		2880: 425,
		2881: 425,
		2883: 425,
		2885: 425,
		2887: 425,
		2888: 425,
		2889: 425,
		2891: 425,
		2893: 425,
		2895: 425,
		2904: 425,
		2905: 425,
		2907: 425,
		2909: 425,
		2911: 425,
		2920: 425,
		2921: 425,
		2923: 425,
		2925: 425,
		2927: 425,
		2936: 425,
		2937: 425,
		2939: 425,
		2941: 425,
		2943: 425,
		3008: 425,
		3009: 425,
		3011: 425,
		3013: 425,
		3015: 425,
		3016: 425,
		3017: 425,
		3019: 425,
		3021: 425,
		3023: 425,
		3032: 425,
		3033: 425,
		3035: 425,
		3037: 425,
		3039: 425,
		3048: 425,
		3049: 425,
		3051: 425,
		3053: 425,
		3055: 425,
		3064: 425,
		3065: 425,
		3067: 425,
		3069: 425,
		3071: 425,
		3584: 425,
		3585: 392,
		3587: 425,
		3589: 392,
		3591: 425,
		3592: 425,
		3593: 392,
		3595: 425,
		3597: 392,
		3599: 425,
		3608: 425,
		3609: 392,
		3611: 425,
		3613: 392,
		3615: 425,
		3624: 425,
		3625: 392,
		3627: 425,
		3629: 392,
		3631: 425,
		3640: 425,
		3641: 392,
		3643: 425,
		3645: 392,
		3647: 425,
		3648: 425,
		3649: 425,
		3651: 425,
		3653: 425,
		3655: 425,
		3656: 425,
		3657: 425,
		3659: 425,
		3661: 425,
		3663: 425,
		3672: 425,
		3673: 425,
		3675: 425,
		3677: 425,
		3679: 425,
		3688: 425,
		3689: 425,
		3691: 425,
		3693: 425,
		3695: 425,
		3704: 425,
		3705: 425,
		3707: 425,
		3709: 425,
		3711: 425,
		3776: 425,
		3777: 425,
		3779: 425,
		3781: 425,
		3783: 425,
		3784: 425,
		3785: 425,
		3787: 425,
		3789: 425,
		3791: 425,
		3800: 425,
		3801: 425,
		3803: 425,
		3805: 425,
		3807: 425,
		3816: 425,
		3817: 425,
		3819: 425,
		3821: 425,
		3823: 425,
		3832: 425,
		3833: 425,
		3835: 425,
		3837: 425,
		3839: 425,
		3904: 425,
		3905: 425,
		3907: 425,
		3909: 425,
		3911: 425,
		3912: 425,
		3913: 425,
		3915: 425,
		3917: 425,
		3919: 425,
		3928: 425,
		3929: 425,
		3931: 425,
		3933: 425,
		3935: 425,
		3944: 425,
		3945: 425,
		3947: 425,
		3949: 425,
		3951: 425,
		3960: 425,
		3961: 425,
		3963: 425,
		3965: 425,
		3967: 425,
		4032: 425,
		4033: 425,
		4035: 425,
		4037: 425,
		4039: 425,
		4040: 425,
		4041: 425,
		4043: 425,
		4045: 425,
		4047: 425,
		4056: 425,
		4057: 425,
		4059: 425,
		4061: 425,
		4063: 425,
		4072: 425,
		4073: 425,
		4075: 425,
		4077: 425,
		4079: 425,
		4088: 425,
		4089: 425,
		4091: 425,
		4093: 425,
		4095: 425
	},

	addToolbar = function( location, type, parent, insertMode, options ) {
		var toolbar = toolbars[ location ][ type ].clone();

		if ( options.fixed ) {
			toolbar.attr( "data-" + $.mobile.ns + "position", "fixed" );
		}
		toolbar[ insertMode ]( parent );
		if ( options.instantiate ) {
			toolbar.toolbar();
		}

		return toolbar;
	},

	// Using a bit field for the flags:
	// Least significant bit
	// * external header is present
	// * external header is fixed
	// * external header is instantiated
	// * external footer is present
	// * external footer is fixed
	// * external footer is instantiated
	// * internal header is present
	// * internal header is fixed
	// * internal header is instantiated
	// * internal footer is present
	// * internal footer is fixed
	// * internal footer is instantiated
	// Most significant bit
	// If a header is absent but its flags are true, the situation is ignored
	createTestScenario = function( flags ) {
		var options = {
			external: {
				header: {
					present: !!( flags % 2 ),
					fixed: !!( ( flags >> 1 ) % 2 ),
					instantiated: !!( ( flags >> 2 ) % 2 ),
				},
				footer: {
					present: !!( ( flags >> 3 ) % 2 ),
					fixed: !!( ( flags >> 4 ) % 2 ),
					instantiated: !!( ( flags >> 5 ) % 2 ),
				},
			},
			internal: {
				header: {
					present: !!( ( flags >> 6 ) % 2 ),
					fixed: !!( ( flags >> 7 ) % 2 ),
					instantiated: !!( ( flags >> 8 ) % 2 ),
				},
				footer: {
					present: !!( ( flags >> 9 ) % 2 ),
					fixed: !!( ( flags >> 10 ) % 2 ),
					instantiated: !!( ( flags >> 11 ) % 2 )
				}
			}
		};

		// We exit if a toolbar is set to be absent, but any one of its flags is set to true
		if ( ( !options.external.header.present &&
				( options.external.header.fixed || options.external.header.instantiated ) ) ||
				( !options.external.footer.present &&
				( options.external.footer.fixed || options.external.footer.instantiated ) ) ||
				( !options.internal.header.present &&
				( options.internal.header.fixed || options.internal.header.instantiated ) ) ||
				( !options.internal.footer.present &&
				( options.internal.footer.fixed || options.internal.footer.instantiated ) ) ) {

			return;
		}

		QUnit.test( "Scenario " + flags, function( assert ) {
			var currentPage, externalHeader, externalFooter, internalHeader, internalFooter;

			// Add external header, if needed
			if ( options.external.header.present ) {
				externalHeader = addToolbar( "external", "header", "body", "appendTo",
					options.external.header );
			}

			// Add page
			currentPage = page.clone().appendTo( "body" );

			// Add internal header, if needed
			if ( options.internal.header.present ) {
				internalHeader = addToolbar( "internal", "header", currentPage, "prependTo",
					options.internal.header );
			}

			// Add internal footer, if needed
			if ( options.internal.footer.present ) {
				internalFooter = addToolbar( "internal", "footer", currentPage, "appendTo",
					options.internal.footer );
			}

			// Add external footer, if needed
			if ( options.external.footer.present ) {
				externalFooter = addToolbar( "external", "footer", "body", "appendTo",
					options.external.footer );
			}

			$.mobile.resetActivePageHeight( 425 );

			assert.deepEqual( currentPage.height(), expectedResult[ flags ], "Page height correct" );

			if ( externalHeader ) {
				externalHeader.remove();
			}
			currentPage.remove();
			if ( externalFooter ) {
				externalFooter.remove();
			}
		} );
	};

for ( index = 0; index < 4096; index++ ) {
	createTestScenario( index );
}
} )( QUnit );
