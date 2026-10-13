/**
 * FloatDoc - FX & Audio Processing Library Engine
 * Ported from AudioQuest for Logic Pro & Soundtrap High School Sound Engineering
 */
(function(global) {
  const FX_DATA = [{"id":"eq","name":"EQ (Equalization)","category":"frequency","description":"Sculpts tonal balance by boosting or cutting specific frequency pockets.","audioPath":null,"svg":"<svg viewBox=\"6 8 88 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><line x1=\"8\" y1=\"32\" x2=\"92\" y2=\"32\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-opacity=\"0.4\" stroke-linecap=\"round\"></line><path d=\"M 8 46 C 26 46 36 10 50 10 C 64 10 74 46 92 46\" stroke=\"currentColor\" stroke-width=\"3.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"hi-pass-filter","name":"Hi-Pass Filter","category":"frequency","description":"Rolls off sub-bass rumble while allowing all higher frequencies to pass untouched.","audioPath":"/audio/hi-pass filter.mp3","svg":"<svg viewBox=\"4 8 92 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><line x1=\"6\" y1=\"14\" x2=\"94\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-opacity=\"0.4\" stroke-linecap=\"round\"></line><path d=\"M 6 42 L 40 42 C 48 42, 54 36, 62 18 C 65 14, 68 14, 94 14\" stroke=\"currentColor\" stroke-width=\"3.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"lo-pass-filter","name":"Low-Pass Filter","category":"frequency","description":"Rolls off harsh treble and synth fizz while preserving fundamental low frequencies.","audioPath":"/audio/low-pass filter.mp3","svg":"<svg viewBox=\"4 8 92 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><line x1=\"6\" y1=\"14\" x2=\"94\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-opacity=\"0.4\" stroke-linecap=\"round\"></line><path d=\"M 6 14 L 30 14 C 36 14, 42 16, 50 34 C 54 42, 60 42, 94 42\" stroke=\"currentColor\" stroke-width=\"3.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"low-shelf-cut","name":"Low Shelf Cut","category":"frequency","description":"Attenuates all frequencies below a set turnover frequency evenly.","audioPath":"/audio/low shelf cut.mp3","svg":"<svg viewBox=\"4 8 92 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><line x1=\"6\" y1=\"22\" x2=\"94\" y2=\"22\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-opacity=\"0.4\" stroke-linecap=\"round\"></line><path d=\"M 6 38 L 30 38 C 44 38, 52 22, 66 22 L 94 22\" stroke=\"currentColor\" stroke-width=\"3.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"low-shelf-boost","name":"Low Shelf Boost","category":"frequency","description":"Lifts low-end weight and bass fundamentals below a turnover frequency evenly.","audioPath":"/audio/low shelf boost.mp3","svg":"<svg viewBox=\"4 8 92 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><line x1=\"6\" y1=\"28\" x2=\"94\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-opacity=\"0.4\" stroke-linecap=\"round\"></line><path d=\"M 6 12 L 30 12 C 44 12, 52 28, 66 28 L 94 28\" stroke=\"currentColor\" stroke-width=\"3.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"high-shelf-cut","name":"High Shelf Cut","category":"frequency","description":"Attenuates all high-frequency brightness above a set turnover frequency evenly.","audioPath":"/audio/hi shelf cut.mp3","svg":"<svg viewBox=\"4 8 92 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><line x1=\"6\" y1=\"14\" x2=\"94\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-opacity=\"0.4\" stroke-linecap=\"round\"></line><path d=\"M 6 14 L 34 14 C 48 14, 56 36, 70 36 L 94 36\" stroke=\"currentColor\" stroke-width=\"3.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"high-shelf-boost","name":"High Shelf Boost","category":"frequency","description":"Boosts air, sheen, and top-end sparkle above a set turnover frequency evenly.","audioPath":"/audio/hi shelf boost.mp3","svg":"<svg viewBox=\"4 8 92 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><line x1=\"6\" y1=\"28\" x2=\"94\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-opacity=\"0.4\" stroke-linecap=\"round\"></line><path d=\"M 6 28 L 34 28 C 48 28, 56 12, 70 12 L 94 12\" stroke=\"currentColor\" stroke-width=\"3.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"bell-boost","name":"Bell Boost","category":"frequency","description":"Focuses a bell-shaped parametric boost on a specific center frequency pocket.","audioPath":"/audio/bell boost.mp3","svg":"<svg viewBox=\"4 8 92 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><line x1=\"6\" y1=\"28\" x2=\"94\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-opacity=\"0.4\" stroke-linecap=\"round\"></line><path d=\"M 6 28 L 30 28 C 42 28, 45 10, 50 10 C 55 10, 58 28, 70 28 L 94 28\" stroke=\"currentColor\" stroke-width=\"3.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"dynamic-eq","name":"Dynamic EQ","category":"frequency","description":"Combines surgical parametric equalization with dynamic threshold-dependent cuts and boosts.","audioPath":null,"svg":"<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><line x1=\"20\" y1=\"72\" x2=\"108\" y2=\"72\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-dasharray=\"2 8\"></line><circle cx=\"64\" y=\"44\" r=\"7\" fill=\"#ffffff\" stroke=\"currentColor\" stroke-width=\"5\"></circle><path d=\"M 22 72 Q 44 72 52 50 Q 64 26 76 50 Q 84 72 106 72\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"7\" stroke-linecap=\"round\"></path><path d=\"M 64 26 L 64 16 M 58 22 L 64 16 L 70 22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 64 84 L 64 100 M 58 94 L 64 100 L 70 94\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"compressor","name":"Compressor","category":"dynamics","description":"Regulates dynamic range, clamping loud transient spikes and boosting subtle tails. Can also be used for advanced techniques such as parallel, serial, and sidechain compression.","audioPath":"/audio/compression.mp3","svg":"<svg viewBox=\"4 4 92 92\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><line x1=\"6\" y1=\"24\" x2=\"94\" y2=\"24\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"0.1 4\" stroke-linecap=\"round\"></line><line x1=\"6\" y1=\"76\" x2=\"94\" y2=\"76\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"0.1 4\" stroke-linecap=\"round\"></line><line x1=\"6\" y1=\"50\" x2=\"94\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></line><line x1=\"50\" y1=\"5\" x2=\"50\" y2=\"20\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\"></line><path d=\"M 44 14 L 50 20 L 56 14\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><line x1=\"50\" y1=\"95\" x2=\"50\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\"></line><path d=\"M 44 86 L 50 80 L 56 86\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 6 50 L 13 50 C 14.5 50 16 46 17 43 C 18 40 18.5 58 19.5 61 C 20.5 64 21 20 22 14 C 23 8 23.5 82 24.5 86 C 25.5 90 26.5 35 27.5 30 C 28.5 25 29.5 53 30.5 56 C 31.5 59 32 41 33 39 C 34 37 34.5 51 35.5 53 C 37 56 38 41 41.5 38 C 45 35 46 45 49 51 C 52 57 55 58 58 57 C 62 56 64 45 68 45 C 72 45 74 54 79 54 C 84 54 87 50 94 50\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"serial-compression","name":"Serial Compression","category":"dynamics","description":"Chains multiple compressors in sequence where each unit applies gentle, transparent gain reduction for smooth and natural dynamic control.","audioPath":"/audio/serial compression.mp3","svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"14 10 100 96\" class=\"fx-svg-icon\"><rect x=\"18\" y=\"14\" width=\"36\" height=\"38\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"></rect><path d=\"M 22 33 L 25 33 L 27 21 L 29 43 L 32 27 L 35 38 L 38 30 L 41 35 L 44 33 L 50 33\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><line x1=\"21\" y1=\"22\" x2=\"51\" y2=\"22\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-dasharray=\"2 2\"></line><line x1=\"21\" y1=\"44\" x2=\"51\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-dasharray=\"2 2\"></line><path d=\"M 35 17 L 35 20 M 33 18.5 L 35 20 L 37 18.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 35 49 L 35 46 M 33 47.5 L 35 46 L 37 47.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><line x1=\"58\" y1=\"33\" x2=\"68\" y2=\"33\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"></line><line x1=\"63\" y1=\"28\" x2=\"63\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"></line><rect x=\"74\" y=\"14\" width=\"36\" height=\"38\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"></rect><path d=\"M 78 33 L 81 33 L 83 21 L 85 43 L 88 27 L 91 38 L 94 30 L 97 35 L 100 33 L 106 33\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><line x1=\"77\" y1=\"22\" x2=\"107\" y2=\"22\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-dasharray=\"2 2\"></line><line x1=\"77\" y1=\"44\" x2=\"107\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-dasharray=\"2 2\"></line><path d=\"M 91 17 L 91 20 M 89 18.5 L 91 20 L 93 18.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 91 49 L 91 46 M 89 47.5 L 91 46 L 93 47.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><line x1=\"16\" y1=\"76\" x2=\"26\" y2=\"76\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\"></line><line x1=\"16\" y1=\"84\" x2=\"26\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\"></line><line x1=\"32\" y1=\"80\" x2=\"112\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"></line><path d=\"M 32 80 L 38 80 L 42 72 L 46 88 L 50 76 L 54 84 L 58 77 L 62 83 L 66 79 L 70 81 L 74 80 L 112 80\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><line x1=\"32\" y1=\"68\" x2=\"112\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"2.5 2.5\"></line><line x1=\"32\" y1=\"92\" x2=\"112\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"2.5 2.5\"></line><path d=\"M 72 59 L 72 64 M 69.5 61.5 L 72 64 L 74.5 61.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 72 101 L 72 96 M 69.5 98.5 L 72 96 L 74.5 98.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"parallel-compression","name":"Parallel Compression","category":"dynamics","description":"Blends a heavily squashed and saturated parallel copy with the uncompressed dry signal to retain transient punch while thickening sustain. Also called \"New York Compression.\"","audioPath":"/audio/parallel compression.mp3","svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"2 6 124 116\" class=\"fx-svg-icon\"><path d=\"M 4 64 L 14 64 C 20 64 24 26 34 26 L 94 26 C 104 26 108 64 114 64 L 124 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\"></path><path d=\"M 14 64 C 20 64 24 102 34 102 L 94 102 C 104 102 108 64 114 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\"></path><rect x=\"34\" y=\"10\" width=\"60\" height=\"46\" rx=\"8\" fill=\"#080c18\" stroke=\"currentColor\" stroke-width=\"3\"></rect><path d=\"M 38 33 L 42 33 L 45 22 L 48 44 L 51 28 L 54 38 L 57 30 L 60 36 L 63 33 L 90 33\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><line x1=\"37\" y1=\"18\" x2=\"91\" y2=\"18\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-dasharray=\"2 2\"></line><line x1=\"37\" y1=\"48\" x2=\"91\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-dasharray=\"2 2\"></line><path d=\"M 64 13 L 64 17 M 62 15 L 64 17 L 66 15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 64 53 L 64 49 M 62 51 L 64 49 L 66 51\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><rect x=\"34\" y=\"70\" width=\"60\" height=\"46\" rx=\"8\" fill=\"#080c18\" stroke=\"currentColor\" stroke-width=\"3\"></rect><path d=\"M 38 93 L 42 93 L 46 76 L 50 110 L 54 84 L 58 104 L 62 88 L 66 100 L 70 90 L 74 97 L 78 93 L 90 93\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"sidechain-compression","name":"Sidechain Compression","category":"dynamics","description":"Ducks signal volume automatically in response to an external trigger source (such as ducking a bassline when the kick drum hits).","audioPath":"/audio/sidechain compression.mp3","svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"16 8 102 104\" class=\"fx-svg-icon\"><path d=\"M 22 88 L 22 46 C 22 40 26 36 32 36 L 42 36\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 38 30 L 46 36 L 38 42\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><line x1=\"48\" y1=\"36\" x2=\"114\" y2=\"36\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"></line><path d=\"M 48 36 L 54 36 L 58 20 L 62 52 L 66 26 L 70 46 L 74 30 L 78 42 L 82 33 L 86 39 L 90 36 L 114 36\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><line x1=\"48\" y1=\"20\" x2=\"114\" y2=\"20\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"2.5 2.5\"></line><line x1=\"48\" y1=\"52\" x2=\"114\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"2.5 2.5\"></line><path d=\"M 81 11 L 81 17 M 78.5 14.5 L 81 17 L 83.5 14.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 81 61 L 81 55 M 78.5 57.5 L 81 55 L 83.5 57.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><line x1=\"18\" y1=\"88\" x2=\"114\" y2=\"88\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"></line><path d=\"M 18 88 L 38 88 L 42 70 L 46 106 L 50 76 L 54 98 L 58 82 L 62 94 L 66 86 L 70 90 L 74 88 L 114 88\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"noise-gate","name":"Noise Gate","category":"dynamics","description":"Silences audio below a set volume threshold to remove hum, bleed, and hiss.","audioPath":"/audio/noise gate.mp3","svg":"<svg viewBox=\"6 10 88 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><line x1=\"8\" y1=\"30\" x2=\"38\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"3.2\" stroke-linecap=\"round\"></line><path d=\"M 30 22 L 38 30 L 30 38\" stroke=\"currentColor\" stroke-width=\"3.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><line x1=\"44\" y1=\"12\" x2=\"44\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\"></line><line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\"></line><path d=\"M 54 30 L 56 26 L 59 34 L 62 27 L 65 33 L 68 30\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><line x1=\"68\" y1=\"30\" x2=\"92\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-opacity=\"0.35\" stroke-linecap=\"round\"></line></svg>"},{"id":"de-esser","name":"De-Esser","category":"dynamics","description":"Frequency-specific compression targeting harsh sibilant \"s\" and \"t\" frequencies (5k–8kHz).","audioPath":"/audio/de-ess.mp3","svg":"<svg viewBox=\"20 6 60 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><text x=\"50\" y=\"31\" text-anchor=\"middle\" dominant-baseline=\"central\" font-family=\"&#x27;Helvetica Neue&#x27;, Helvetica, Arial, &#x27;Liberation Sans&#x27;, sans-serif\" font-weight=\"800\" font-size=\"44\" fill=\"currentColor\">S</text><line x1=\"26\" y1=\"8\" x2=\"74\" y2=\"52\" stroke=\"#ffffff\" stroke-width=\"5\" stroke-linecap=\"round\"></line><line x1=\"74\" y1=\"8\" x2=\"26\" y2=\"52\" stroke=\"#ffffff\" stroke-width=\"5\" stroke-linecap=\"round\"></line></svg>"},{"id":"transient-shaper","name":"Transient Shaper","category":"dynamics","description":"Independently controls the initial attack punch and decaying sustain envelope of sounds.","audioPath":"/audio/transient shaper.mp3","svg":"<svg viewBox=\"4 8 92 44\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><path d=\"M 6 30 L 10 30 L 12 10 L 14 46 L 16 16 L 18 42 L 20 22 L 22 36 L 24 26 L 26 33 L 28 28 L 30 30\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 33 30 L 40 30 M 37 26 L 41 30 L 37 34\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><line x1=\"44\" y1=\"32\" x2=\"94\" y2=\"32\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"1.5 3\"></line><path d=\"M 44 32 C 48 32, 51 10, 55 10 C 59 10, 61 32, 65 32\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 46 32 C 54 32, 56 22, 64 22 C 72 22, 74 38, 80 38 C 86 38, 88 32, 94 32\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"limiter","name":"Limiter","category":"dynamics","description":"Imposes an absolute brickwall ceiling to prevent digital overs and clipping.","audioPath":null,"svg":"<svg viewBox=\"0 0 100 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><path d=\"M 43 2 L 57 2 L 57 13 L 66 13 L 50 24 L 34 13 L 43 13 Z\" fill=\"currentColor\"></path><rect x=\"2\" y=\"27\" width=\"96\" height=\"8\" rx=\"1.5\" fill=\"currentColor\"></rect><line x1=\"2\" y1=\"48\" x2=\"98\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"></line><path d=\"M 2 48 L 7 48 C 8.5 48 9 46 9.5 41 C 10 36 10.5 35 11 35 L 12 35 L 12.5 61 L 13.5 35 L 14.5 61 L 15.5 35 L 16.5 61 L 17.5 35 L 18.5 61 L 19.5 35 L 20.5 61 L 21.5 35 L 22.5 61 L 23.5 35 L 24.5 61 L 25.5 35 L 26.5 61 L 27.5 35 L 28.5 61 L 29.5 35 L 30.5 61 L 32 37 C 33 40 33.5 58 34.5 58 C 35.5 58 36 41 37 41 C 38 41 38.5 55 39.5 55 C 40.5 55 41 43 42 43 C 43 43 44 53 45 53 C 46 53 47 45 48 45 C 49 45 50 51 51 51 C 52 51 53 46 54 46 C 55 46 56 50 57 50 C 58 50 59 47 60 47 C 62 47 64 49 66 49 C 68 49 70 48 72 48 L 98 48\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><rect x=\"2\" y=\"61\" width=\"96\" height=\"8\" rx=\"1.5\" fill=\"currentColor\"></rect><path d=\"M 43 94 L 57 94 L 57 83 L 66 83 L 50 72 L 34 83 L 43 83 Z\" fill=\"currentColor\"></path></svg>"},{"id":"reverb","name":"Reverb","category":"space","description":"Simulates physical acoustic chambers, rooms, plates, and expansive spaces.","audioPath":"/audio/reverb.mp3","svg":"<svg viewBox=\"14 8 72 44\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><path d=\"M 16 50 L 16 22 L 50 10 L 84 22 L 84 50\" stroke=\"currentColor\" stroke-width=\"3.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 40 22 C 45 28 55 28 60 22\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></path><path d=\"M 31 31 C 41 40 59 40 69 31\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></path><path d=\"M 23 40 C 37 52 63 52 77 40\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></path></svg>"},{"id":"plate-reverb","name":"Plate Reverb","category":"space","description":"Mechanical suspension steel plate reverb producing bright, dense, and shimmering reflections.","audioPath":"/audio/plate reverb.mp3","svg":"<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><rect x=\"14\" y=\"18\" width=\"100\" height=\"92\" rx=\"6\" stroke=\"currentColor\" stroke-width=\"4\" fill=\"none\"></rect><path d=\"M 14 34 L 28 34 L 28 18\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\"></path><path d=\"M 114 34 L 100 34 L 100 18\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\"></path><path d=\"M 14 94 L 28 94 L 28 110\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\"></path><path d=\"M 114 94 L 100 94 L 100 110\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\"></path><rect x=\"32\" y=\"32\" width=\"64\" height=\"64\" rx=\"4\" fill=\"currentColor\" fill-opacity=\"0.25\" stroke=\"currentColor\" stroke-width=\"2.5\"></rect><rect x=\"28\" y=\"44\" width=\"9\" height=\"14\" rx=\"2\" fill=\"#0f172a\" stroke=\"currentColor\" stroke-width=\"2\"></rect><rect x=\"28\" y=\"70\" width=\"9\" height=\"14\" rx=\"2\" fill=\"#0f172a\" stroke=\"currentColor\" stroke-width=\"2\"></rect><rect x=\"91\" y=\"57\" width=\"9\" height=\"14\" rx=\"2\" fill=\"#0f172a\" stroke=\"currentColor\" stroke-width=\"2\"></rect><path d=\"M 14 51 L 28 51 M 14 77 L 28 77\" stroke=\"currentColor\" stroke-width=\"3\"></path><path d=\"M 100 64 L 114 64\" stroke=\"currentColor\" stroke-width=\"3\"></path><path d=\"M 56 46 C 66 46, 72 52, 72 64 C 72 76, 66 82, 56 82\" stroke=\"currentColor\" stroke-width=\"2.5\" fill=\"none\"></path><path d=\"M 62 53 C 68 53, 72 58, 72 64 C 72 70, 68 75, 62 75\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path></svg>"},{"id":"spring-reverb","name":"Spring Reverb","category":"space","description":"Mechanical transducer tank producing iconic bouncy, metallic guitar amp reflections.","audioPath":"/audio/spring reverb.mp3","svg":"<svg viewBox=\"0 6 100 38\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><line x1=\"2\" y1=\"25\" x2=\"10\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></line><rect x=\"10\" y=\"8\" width=\"5\" height=\"34\" rx=\"1.5\" stroke=\"currentColor\" stroke-width=\"2.4\" fill=\"currentColor\" fill-opacity=\"0.15\"></rect><line x1=\"90\" y1=\"25\" x2=\"98\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></line><rect x=\"85\" y=\"8\" width=\"5\" height=\"34\" rx=\"1.5\" stroke=\"currentColor\" stroke-width=\"2.4\" fill=\"currentColor\" fill-opacity=\"0.15\"></rect><g stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M 15 25 C 16 11, 22 11, 23 25 C 24 39, 17 39, 18 25\"></path><path d=\"M 22 25 C 23 11, 29 11, 30 25 C 31 39, 24 39, 25 25\"></path><path d=\"M 29 25 C 30 11, 36 11, 37 25 C 38 39, 31 39, 32 25\"></path><path d=\"M 36 25 C 37 11, 43 11, 44 25 C 45 39, 38 39, 39 25\"></path><path d=\"M 43 25 C 44 11, 50 11, 51 25 C 52 39, 45 39, 46 25\"></path><path d=\"M 50 25 C 51 11, 57 11, 58 25 C 59 39, 52 39, 53 25\"></path><path d=\"M 57 25 C 58 11, 64 11, 65 25 C 66 39, 59 39, 60 25\"></path><path d=\"M 64 25 C 65 11, 71 11, 72 25 C 73 39, 66 39, 67 25\"></path><path d=\"M 71 25 C 72 11, 78 11, 79 25 C 80 39, 73 39, 74 25\"></path><path d=\"M 78 25 C 79 11, 84 11, 85 25\"></path></g></svg>"},{"id":"gated-reverb","name":"Gated Reverb","category":"space","description":"Huge 1980s ambient reverb tail abruptly truncated by a noise gate for explosive punch.","audioPath":"/audio/gated reverb.mp3","svg":"<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><line x1=\"24\" y1=\"20\" x2=\"24\" y2=\"108\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"4 4\"></line><rect x=\"34\" y=\"24\" width=\"14\" height=\"84\" fill=\"currentColor\"></rect><rect x=\"51\" y=\"68\" width=\"10\" height=\"40\" fill=\"currentColor\" fill-opacity=\"0.6\"></rect><rect x=\"64\" y=\"58\" width=\"10\" height=\"50\" fill=\"currentColor\" fill-opacity=\"0.7\"></rect><rect x=\"77\" y=\"44\" width=\"10\" height=\"64\" fill=\"currentColor\" fill-opacity=\"0.85\"></rect><rect x=\"90\" y=\"16\" width=\"24\" height=\"92\" rx=\"4\" stroke=\"currentColor\" stroke-width=\"3.5\" fill=\"none\"></rect><rect x=\"93\" y=\"44\" width=\"18\" height=\"61\" fill=\"currentColor\"></rect></svg>"},{"id":"delay","name":"Delay & Echo","category":"space","description":"Creates rhythmic repeating echo reflections with controlled feedback and timing.","audioPath":"/audio/delay & echo.mp3","svg":"<svg viewBox=\"6 13 86 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><g stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M 8 23 L 14 23 L 22 15 L 22 45 L 14 37 L 8 37 Z\" fill=\"currentColor\" fill-opacity=\"0.15\"></path><path d=\"M 27 22 C 30 26 30 34 27 38\"></path><path d=\"M 32 17 C 37 23 37 37 32 43\"></path></g><g stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.75\"><path d=\"M 44 25 L 48 25 L 54 19 L 54 41 L 48 35 L 44 35 Z\"></path><path d=\"M 58 24 C 60 27 60 33 58 36\"></path><path d=\"M 62 20 C 66 25 66 35 62 40\"></path></g><g stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.45\"><path d=\"M 72 27 L 75 27 L 80 22 L 80 38 L 75 33 L 72 33 Z\"></path><path d=\"M 83 26 C 85 28 85 32 83 34\"></path><path d=\"M 87 23 C 90 26 90 34 87 37\"></path></g></svg>"},{"id":"chorus","name":"Chorus","category":"modulation","description":"Layers pitch-detuned and time-delayed copies to simulate multi-voice ensemble.","audioPath":"/audio/chorus.mp3","svg":"<svg viewBox=\"6 6 88 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><path d=\"M 8 20 C 18 8 30 8 40 20 C 50 32 62 32 72 20 C 80 10 88 12 92 20\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></path><path d=\"M 8 26 C 18 14 30 14 40 26 C 50 38 62 38 72 26 C 80 16 88 18 92 26\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></path><path d=\"M 8 33 C 18 21 30 21 40 33 C 50 45 62 45 72 33 C 80 23 88 25 92 33\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></path><path d=\"M 8 40 C 18 28 30 28 40 40 C 50 52 62 52 72 40 C 80 30 88 32 92 40\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></path></svg>"},{"id":"flanger","name":"Flanger","category":"modulation","description":"Interweaves audio copies with sweeping phase delays for iconic jet-plane comb filtering.","audioPath":"/audio/flanger.mp3","svg":"<svg viewBox=\"6 6 90 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><path d=\"M 8 30 C 16 8 28 8 36 30 C 44 52 56 52 64 30 C 72 8 84 8 92 30\" stroke=\"currentColor\" stroke-width=\"3.4\" stroke-linecap=\"round\"></path><path d=\"M 12 33 C 20 11 32 11 40 33 C 48 55 60 55 68 33 C 76 11 88 11 94 32\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-dasharray=\"3 3\" stroke-opacity=\"0.6\" stroke-linecap=\"round\"></path></svg>"},{"id":"phaser","name":"Phaser","category":"modulation","description":"Uses all-pass filters to create series of moving notches and lush sweeping phase swirl.","audioPath":"/audio/phaser.mp3","svg":"<svg viewBox=\"2 8 96 44\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><path d=\"M 4 30 L 7 30 C 11 30, 13 14, 17 14 C 21 14, 25 46, 29 46 C 33 46, 37 12, 42 12 C 47 12, 51 46, 56 46 C 61 46, 65 12, 70 12 C 75 12, 79 46, 84 46 C 88 46, 92 30, 96 30\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 4 30 C 8 28, 14 14, 19 14 C 24 14, 28 46, 33 46 C 38 46, 42 12, 47 12 C 52 12, 56 46, 61 46 C 66 46, 70 12, 75 12 C 80 12, 84 46, 89 46 C 93 46, 94 30, 96 30\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 32 30 C 36 18, 40 18, 44 26 C 48 34, 52 42, 57 42 C 62 42, 66 18, 71 18 C 74 18, 77 30, 78 30\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"tremolo","name":"Tremolo","category":"modulation","description":"Modulates amplitude periodically with an LFO to create rhythmic volume pulsing.","audioPath":"/audio/tremolo.mp3","svg":"<svg viewBox=\"8 6 84 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><line x1=\"12\" y1=\"28\" x2=\"12\" y2=\"32\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></line><line x1=\"18\" y1=\"25\" x2=\"18\" y2=\"35\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></line><line x1=\"24\" y1=\"20\" x2=\"24\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></line><line x1=\"30\" y1=\"14\" x2=\"30\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></line><line x1=\"36\" y1=\"9\" x2=\"36\" y2=\"51\" stroke=\"currentColor\" stroke-width=\"3.2\" stroke-linecap=\"round\"></line><line x1=\"42\" y1=\"12\" x2=\"42\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></line><line x1=\"48\" y1=\"18\" x2=\"48\" y2=\"42\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></line><line x1=\"54\" y1=\"10\" x2=\"54\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"3.2\" stroke-linecap=\"round\"></line><line x1=\"60\" y1=\"8\" x2=\"60\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"3.2\" stroke-linecap=\"round\"></line><line x1=\"66\" y1=\"12\" x2=\"66\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></line><line x1=\"72\" y1=\"18\" x2=\"72\" y2=\"42\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></line><line x1=\"78\" y1=\"23\" x2=\"78\" y2=\"37\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></line><line x1=\"84\" y1=\"27\" x2=\"84\" y2=\"33\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\"></line></svg>"},{"id":"pitch-shifter","name":"Pitch Shifter","category":"modulation","description":"Shifts pitch up or down without altering playback duration or tempo.","audioPath":"/audio/pitch shifter.mp3","svg":"<svg viewBox=\"10 10 84 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><ellipse cx=\"27\" cy=\"62\" rx=\"10\" ry=\"7.5\" transform=\"rotate(-20 27 62)\" fill=\"currentColor\"></ellipse><line x1=\"34\" y1=\"62\" x2=\"34\" y2=\"18\" stroke=\"currentColor\" stroke-width=\"6\" stroke-linecap=\"round\"></line><line x1=\"58\" y1=\"24\" x2=\"58\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"6\" stroke-linecap=\"round\"></line><path d=\"M 47 31 L 58 20 L 69 31\" stroke=\"currentColor\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><line x1=\"77\" y1=\"48\" x2=\"77\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"6\" stroke-linecap=\"round\"></line><path d=\"M 66 61 L 77 72 L 88 61\" stroke=\"currentColor\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"saturation","name":"Saturation","category":"harmonics","description":"Generates warm even & odd harmonics through analog tape and tube emulation.","audioPath":"/audio/saturation.mp3","svg":"<svg viewBox=\"6 8 88 44\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><path d=\"M 8 30 C 14 10 24 10 30 30 C 36 50 44 50 48 30 C 50 20 52 14 54 30 L 57 12 L 60 48 L 63 10 L 66 50 L 69 9 L 72 51 L 75 10 L 78 50 L 81 12 L 84 48 L 87 18 L 90 42 L 92 30\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"distortion","name":"Distortion","category":"harmonics","description":"Hard-clips waveforms into aggressive, abrasive overdrive harmonics.","audioPath":"/audio/distortion.mp3","svg":"<svg viewBox=\"6 8 88 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><path d=\"M 8 30 L 12 30 L 14 20 L 16 38 L 18 10 L 24 10 L 26 48 L 29 20 L 32 50 L 37 50 L 39 12 L 43 12 L 45 44 L 48 10 L 52 10 L 55 48 L 59 14 L 62 52 L 67 52 L 70 12 L 74 12 L 77 46 L 80 10 L 85 10 L 87 40 L 89 24 L 92 30\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"},{"id":"bitcrusher","name":"Bitcrusher","category":"harmonics","description":"Reduces digital bit depth and sample rate for crunchy lo-fi quantization artifacts.","audioPath":"/audio/bitcrusher.mp3","svg":"<svg viewBox=\"6 10 88 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fx-svg-icon\"><path d=\"M 8 30 L 12 30 L 14 18 L 18 42 L 22 12 L 26 48 L 30 16 L 34 44 L 38 24 L 40 30\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><rect x=\"42\" y=\"24\" width=\"4.5\" height=\"4.5\" fill=\"currentColor\"></rect><rect x=\"42\" y=\"32\" width=\"4.5\" height=\"4.5\" fill=\"currentColor\"></rect><rect x=\"48\" y=\"16\" width=\"4.5\" height=\"4.5\" fill=\"currentColor\"></rect><rect x=\"48\" y=\"22\" width=\"4.5\" height=\"4.5\" fill=\"currentColor\"></rect><rect x=\"48\" y=\"36\" width=\"4.5\" height=\"4.5\" fill=\"currentColor\"></rect><rect x=\"54\" y=\"18\" width=\"4.5\" height=\"4.5\" fill=\"currentColor\"></rect><rect x=\"54\" y=\"24\" width=\"4.5\" height=\"4.5\" fill=\"currentColor\"></rect><rect x=\"54\" y=\"30\" width=\"4.5\" height=\"4.5\" fill=\"currentColor\"></rect><rect x=\"54\" y=\"38\" width=\"4.5\" height=\"4.5\" fill=\"currentColor\"></rect><rect x=\"60\" y=\"22\" width=\"4.5\" height=\"4.5\" fill=\"currentColor\"></rect><rect x=\"60\" y=\"28\" width=\"4.5\" height=\"4.5\" fill=\"currentColor\"></rect><rect x=\"60\" y=\"34\" width=\"4.5\" height=\"4.5\" fill=\"currentColor\"></rect><rect x=\"66\" y=\"24\" width=\"4.5\" height=\"4.5\" fill=\"currentColor\"></rect><rect x=\"66\" y=\"30\" width=\"4.5\" height=\"4.5\" fill=\"currentColor\"></rect><rect x=\"72\" y=\"26\" width=\"4\" height=\"4\" fill=\"currentColor\"></rect><rect x=\"72\" y=\"32\" width=\"4\" height=\"4\" fill=\"currentColor\"></rect><rect x=\"78\" y=\"28\" width=\"4\" height=\"4\" fill=\"currentColor\"></rect><rect x=\"84\" y=\"29\" width=\"3.5\" height=\"3.5\" fill=\"currentColor\"></rect><rect x=\"90\" y=\"30\" width=\"2.5\" height=\"2.5\" fill=\"currentColor\"></rect></svg>"}];

  // Audio playback controller
  let currentAudio = null;
  let currentPlayingId = null;
  let progressTimer = null;
  let currentAudioProgress = 0;
  let activeAuditionBtn = null;
  let activeAuditionText = null;
  let activeAuditionIcon = null;
  let activeProgressBar = null;

  function stopAudio() {
    if (progressTimer) {
      clearInterval(progressTimer);
      progressTimer = null;
    }
    if (currentAudio) {
      try {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      } catch (e) {}
    }
    currentAudio = null;
    currentPlayingId = null;
    currentAudioProgress = 0;

    if (activeAuditionBtn) {
      activeAuditionBtn.style.background = '#FACC15';
    }
    if (activeAuditionIcon) {
      activeAuditionIcon.textContent = '▶';
    }
    if (activeAuditionText && activeAuditionText.__baseText) {
      activeAuditionText.textContent = activeAuditionText.__baseText;
    }
    if (activeProgressBar) {
      activeProgressBar.style.width = '0%';
    }
  }

  function getCategoryEmoji(cat) {
    switch (cat) {
      case 'frequency': return '🎨';
      case 'dynamics': return '🎚️';
      case 'space': return '🔊';
      case 'modulation': return '🫨';
      case 'harmonics': return '🤘🏻';
      default: return '🔊';
    }
  }

  function getCatLabel(cat) {
    switch (cat) {
      case 'frequency': return 'EQ';
      case 'dynamics': return 'Dynamics';
      case 'space': return 'Reverb & Delay';
      case 'modulation': return 'Modulation & Pitch';
      case 'harmonics': return 'Distortion';
      default: return 'Audio Effect';
    }
  }

  function getCatBadge(cat) {
    switch (cat) {
      case 'frequency': return 'EQ';
      case 'dynamics': return 'Dyn';
      case 'space': return 'Space';
      case 'modulation': return 'Mod';
      case 'harmonics': return 'Drive';
      default: return 'FX';
    }
  }

  function renderFxLibrary(container, win) {
    const doc = win ? win.document : document;
    const targetWin = win || window;

    if (typeof container === 'string') {
      container = doc.getElementById(container);
    }
    if (!container) return;

    // Attach stop handler to target window
    targetWin.stopFxAudio = stopAudio;
    global.stopFxAudio = stopAudio;
    if (typeof window !== 'undefined') {
      window.stopFxAudio = stopAudio;
    }

    let activeCategory = 'all';
    let selectedId = 'compressor';
    let searchQuery = '';
    let savedGridScrollTop = 0;

    const categories = [
      { key: 'all', label: 'All FX', count: 30, icon: '🎛️' },
      { key: 'frequency', label: 'EQ', count: 9, icon: '🎨' },
      { key: 'dynamics', label: 'Dynamics', count: 8, icon: '🎚️' },
      { key: 'space', label: 'Reverb & Delay', count: 5, icon: '🔊' },
      { key: 'modulation', label: 'Modulation & Pitch', count: 5, icon: '🫨' },
      { key: 'harmonics', label: 'Distortion', count: 3, icon: '🤘🏻' }
    ];

    function getFilteredList() {
      return FX_DATA.filter(function(item) {
        const matchesCat = activeCategory === 'all' || item.category === activeCategory;
        const q = searchQuery.trim().toLowerCase();
        const matchesQ = !q || item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
        return matchesCat && matchesQ;
      });
    }

    function renderInspector(item) {
      const inspectorEl = container.querySelector('#fxInspectorContainer');
      if (!inspectorEl) return;

      const isThisPlaying = (currentAudio && !currentAudio.paused && currentPlayingId === item.id);
      const cleanName = item.name.split(' (')[0];
      const baseBtnText = 'Hear ' + cleanName;

      inspectorEl.innerHTML =
        '<div style="display:flex; flex-direction:column; height:100%; justify-content:space-between; box-sizing:border-box;">' +
          '<div>' +
            '<div style="background:#14382B; border:1.5px solid #CA8A04; border-radius:8px; padding:12px; text-align:center; margin-bottom:12px;">' +
              '<div style="height:90px; width:100%; display:flex; align-items:center; justify-content:center; background:#0F2E23; border-radius:6px; border:1px solid #285E4A; margin-bottom:10px; padding:6px; box-sizing:border-box;">' +
                item.svg +
              '</div>' +
              '<div style="font-size:14px; font-weight:700; color:#FEF08A; margin-bottom:10px; font-family:\'Cabin\',sans-serif;">' +
                item.name +
              '</div>' +

              (item.audioPath ? (
                '<div>' +
                  '<button type="button" id="fxAuditionBtn" style="' +
                    'width:100%; padding:8px 12px; font-size:12px; font-weight:700; border-radius:6px; border:none; cursor:pointer; ' +
                    'background:' + (isThisPlaying ? '#CA8A04' : '#FACC15') + '; color:#133629; display:inline-flex; align-items:center; justify-content:center; gap:8px; ' +
                    'box-shadow: 0 2px 8px rgba(250,204,21,0.3); transition:all 0.15s; font-family:\'Cabin\',sans-serif;' +
                  '">' +
                    '<span id="fxAuditionBtnIcon">' + (isThisPlaying ? '⏸' : '▶') + '</span>' +
                    '<span id="fxAuditionBtnText">' + (isThisPlaying ? 'Playing' : baseBtnText) + '</span>' +
                  '</button>' +
                  '<div style="width:100%; height:5px; background:#0F2E23; border-radius:3px; overflow:hidden; margin-top:6px; border:1px solid #285E4A;">' +
                    '<div id="fxAudioProgressBar" style="width:' + (isThisPlaying ? Math.round(currentAudioProgress * 100) : 0) + '%; height:100%; background:#FACC15; transition:width 0.08s linear;"></div>' +
                  '</div>' +
                '</div>'
              ) : (
                '<div style="font-size:11px; color:#FEF08A; background:#0F2E23; border:1px solid #285E4A; padding:7px 10px; border-radius:6px; display:inline-flex; align-items:center; justify-content:center; gap:6px; width:100%; box-sizing:border-box;">' +
                  '<span>🔍</span>' +
                  '<span>Visual & Parameter Reference</span>' +
                '</div>'
              )) +
            '</div>' +

            '<div style="margin-bottom:10px;">' +
              '<div style="font-size:11px; font-weight:700; color:#FACC15; text-transform:uppercase; margin-bottom:5px; letter-spacing:0.5px;">' +
                'Engineering Function:' +
              '</div>' +
              '<div style="font-size:12px; line-height:1.55; color:#f3f4f6; background:#14382B; padding:10px 12px; border-radius:6px; border:1px solid #285E4A;">' +
                item.description +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';

      const auditionBtn = inspectorEl.querySelector('#fxAuditionBtn');
      const btnText = inspectorEl.querySelector('#fxAuditionBtnText');
      const btnIcon = inspectorEl.querySelector('#fxAuditionBtnIcon');
      const bar = inspectorEl.querySelector('#fxAudioProgressBar');

      activeAuditionBtn = auditionBtn;
      activeAuditionText = btnText;
      if (btnText) btnText.__baseText = baseBtnText;
      activeAuditionIcon = btnIcon;
      activeProgressBar = bar;

      if (auditionBtn && item.audioPath) {
        auditionBtn.addEventListener('click', function(e) {
          e.preventDefault();

          // If currently playing THIS item: PAUSE IT
          if (currentAudio && !currentAudio.paused && currentPlayingId === item.id) {
            stopAudio();
            return;
          }

          // Otherwise stop previous audio and start this one
          stopAudio();

          try {
            const AudioConstructor = (targetWin && targetWin.Audio) ? targetWin.Audio : (typeof Audio !== 'undefined' ? Audio : global.Audio);
            const audio = new AudioConstructor(encodeURI(item.audioPath));
            currentAudio = audio;
            currentPlayingId = item.id;
            currentAudioProgress = 0;

            if (item.id === 'sidechain-compression') {
              audio.volume = 0.75;
            } else {
              audio.volume = 1.0;
            }

            activeAuditionBtn = auditionBtn;
            activeAuditionText = btnText;
            if (btnText) {
              btnText.__baseText = baseBtnText;
              btnText.textContent = 'Playing';
            }
            activeAuditionIcon = btnIcon;
            if (btnIcon) btnIcon.textContent = '⏸';
            activeProgressBar = bar;
            if (bar) bar.style.width = '0%';
            auditionBtn.style.background = '#CA8A04';

            const updateProg = () => {
              if (!currentAudio || currentAudio !== audio) return;
              const dur = audio.duration;
              if (dur && !isNaN(dur) && isFinite(dur) && dur > 0) {
                const p = Math.min(1, Math.max(0, audio.currentTime / dur));
                currentAudioProgress = p;
                if (bar && currentPlayingId === item.id) {
                  bar.style.width = Math.round(p * 100) + '%';
                }
              }
            };

            audio.addEventListener('timeupdate', updateProg);
            progressTimer = setInterval(updateProg, 40);

            const handleEnded = () => {
              if (progressTimer) {
                clearInterval(progressTimer);
                progressTimer = null;
              }
              if (currentAudio === audio) {
                currentAudio = null;
                currentPlayingId = null;
                currentAudioProgress = 0;
              }
              if (auditionBtn) auditionBtn.style.background = '#FACC15';
              if (btnIcon) btnIcon.textContent = '▶';
              if (btnText) btnText.textContent = baseBtnText;
              if (bar) bar.style.width = '0%';
            };

            audio.addEventListener('ended', handleEnded);
            audio.addEventListener('error', handleEnded);

            audio.play().catch(() => {
              handleEnded();
            });
          } catch(err) {
            console.error('Audio playback error:', err);
            stopAudio();
          }
        });
      }
    }

    function selectCard(fxId) {
      if (fxId !== selectedId) {
        stopAudio();
        selectedId = fxId;
      }

      // Update card visual states without re-rendering grid
      const cards = container.querySelectorAll('.fx-card-btn');
      cards.forEach(c => {
        const isMatch = (c.getAttribute('data-fxid') === selectedId);
        if (isMatch) {
          c.classList.add('selected');
          c.style.background = '#1A4535';
          c.style.borderColor = '#FACC15';
          c.style.boxShadow = '0 0 10px rgba(250,204,21,0.3)';
          const nameEl = c.querySelector('.fx-card-name');
          if (nameEl) nameEl.style.color = '#FEF08A';
          const badgeEl = c.querySelector('.fx-cat-badge');
          if (badgeEl) {
            badgeEl.style.background = '#FACC15';
            badgeEl.style.color = '#133629';
          }
        } else {
          c.classList.remove('selected');
          c.style.background = '#14382B';
          c.style.borderColor = '#285E4A';
          c.style.boxShadow = 'none';
          const nameEl = c.querySelector('.fx-card-name');
          if (nameEl) nameEl.style.color = '#e5e7eb';
          const badgeEl = c.querySelector('.fx-cat-badge');
          if (badgeEl) {
            badgeEl.style.background = '#0F2E23';
            badgeEl.style.color = '#FDE047';
          }
        }
      });

      const activeItem = FX_DATA.find(i => i.id === selectedId) || FX_DATA[0];
      renderInspector(activeItem);
    }

    function render() {
      const filtered = getFilteredList();
      let activeItem = FX_DATA.find(function(i) { return i.id === selectedId; }) || filtered[0] || FX_DATA[0];
      if (filtered.length > 0 && !filtered.some(function(i) { return i.id === selectedId; })) {
        activeItem = filtered[0];
        selectedId = activeItem.id;
      }

      let categoryButtonsHtml = categories.map(function(c) {
        const isActive = activeCategory === c.key;
        return '<button type="button" class="fx-cat-btn ' + (isActive ? 'active' : '') + '" data-cat="' + c.key + '" style="' +
          'background:' + (isActive ? '#FACC15' : '#14382B') + '; ' +
          'color:' + (isActive ? '#133629' : '#d1d5db') + '; ' +
          'border:1.5px solid ' + (isActive ? '#EAB308' : '#285E4A') + '; ' +
          'padding:5px 9px; border-radius:6px; font-size:11px; font-weight:' + (isActive ? '700' : '600') + '; ' +
          'cursor:pointer; display:inline-flex; align-items:center; gap:5px; transition:all 0.15s; user-select:none; font-family:\'Cabin\',sans-serif;' +
        '">' +
          '<span>' + c.icon + '</span>' +
          '<span>' + c.label + '</span>' +
          '<span style="font-size:9px; padding:1px 5px; border-radius:10px; background:' + (isActive ? '#133629' : '#0F2E23') + '; color:' + (isActive ? '#FEF08A' : '#9ca3af') + '; font-weight:bold;">' + c.count + '</span>' +
        '</button>';
      }).join('');

      let cardsHtml = '';
      if (filtered.length === 0) {
        cardsHtml = '<div style="padding:24px; text-align:center; color:#9ca3af; font-size:12px; background:#14382B; border-radius:8px; border:1px solid #285E4A;">' +
          'No effects found matching "' + searchQuery + '".' +
        '</div>';
      } else {
        cardsHtml = '<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(105px, 1fr)); gap:7px;">' +
          filtered.map(function(item) {
            const isSel = item.id === activeItem.id;
            const catBadge = getCatBadge(item.category);
            const catEmoji = getCategoryEmoji(item.category);
            return '<div class="fx-card-btn ' + (isSel ? 'selected' : '') + '" data-fxid="' + item.id + '" style="' +
              'background:' + (isSel ? '#1A4535' : '#14382B') + '; ' +
              'border:1.5px solid ' + (isSel ? '#FACC15' : '#285E4A') + '; ' +
              'border-radius:8px; padding:6px; cursor:pointer; display:flex; flex-direction:column; justify-content:space-between; ' +
              'transition:all 0.15s; user-select:none; box-shadow:' + (isSel ? '0 0 10px rgba(250,204,21,0.25)' : 'none') + ';' +
            '">' +
              '<div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;">' +
                '<span class="fx-cat-badge" style="font-size:9px; font-weight:bold; text-transform:uppercase; padding:1px 4px; border-radius:3px; background:' + (isSel ? '#FACC15' : '#0F2E23') + '; color:' + (isSel ? '#133629' : '#FDE047') + '; border:1px solid #285E4A;">' +
                  catBadge +
                '</span>' +
                (item.audioPath ? '<span style="font-size:11px;" title="Audio Example Available: ' + getCatLabel(item.category) + '">' + catEmoji + '</span>' : '') +
              '</div>' +
              '<div style="height:44px; display:flex; align-items:center; justify-content:center; background:#0F2E23; border-radius:5px; border:1px solid #285E4A; padding:3px; margin-bottom:4px;">' +
                item.svg +
              '</div>' +
              '<div class="fx-card-name" style="font-size:11px; font-weight:bold; color:' + (isSel ? '#FEF08A' : '#e5e7eb') + '; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="' + item.name + '">' +
                item.name.split(' (')[0] +
              '</div>' +
            '</div>';
          }).join('') +
        '</div>';
      }

      container.innerHTML =
        '<div class="fx-lib-container" style="display:flex; flex-direction:column; height:100%; font-family:\'Cabin\',sans-serif; color:#f3f4f6; overflow:hidden;">' +
          '<!-- Navigation & Filter -->' +
          '<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:6px; margin-bottom:8px; padding-bottom:8px; border-bottom:1px solid #285E4A; flex-shrink:0;">' +
            '<div style="display:flex; flex-wrap:wrap; gap:4px; align-items:center;">' +
              categoryButtonsHtml +
            '</div>' +
            '<div style="position:relative; width:150px;">' +
              '<input type="text" id="fxSearchInput" placeholder="Search FX..." value="' + searchQuery.replace(/"/g, '&quot;') + '" style="' +
                'width:100%; box-sizing:border-box; font-size:11px; padding:4px 8px; ' +
                'background:#0F2E23; border:1px solid #285E4A; border-radius:5px; color:#f3f4f6; outline:none;' +
              '" />' +
            '</div>' +
          '</div>' +

          '<!-- Split Panel Layout -->' +
          '<div style="display:grid; grid-template-columns: 1.15fr 1fr; gap:12px; flex:1; min-height:0; height:100%; overflow:hidden;">' +
            '<!-- Left Cards Grid -->' +
            '<div id="fxCardGridContainer" style="overflow-y:auto; height:100%; padding-right:4px;">' +
              cardsHtml +
            '</div>' +

            '<!-- Right Detailed Inspector -->' +
            '<div id="fxInspectorContainer" style="background:#0F2E23; border:1.5px solid #285E4A; border-radius:10px; padding:12px; display:flex; flex-direction:column; height:100%; overflow-y:auto; box-sizing:border-box;">' +
            '</div>' +
          '</div>' +
        '</div>';

      // Restore scroll position if needed
      const gridContainer = container.querySelector('#fxCardGridContainer');
      if (gridContainer && savedGridScrollTop > 0) {
        gridContainer.scrollTop = savedGridScrollTop;
      }

      // Initial inspector render
      renderInspector(activeItem);

      // Bind category buttons
      container.querySelectorAll('.fx-cat-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          stopAudio();
          savedGridScrollTop = 0;
          activeCategory = btn.getAttribute('data-cat');
          render();
        });
      });

      // Bind search input
      const searchEl = container.querySelector('#fxSearchInput');
      if (searchEl) {
        searchEl.addEventListener('input', function(e) {
          searchQuery = e.target.value;
          savedGridScrollTop = 0;
          render();
          const nextInput = container.querySelector('#fxSearchInput');
          if (nextInput) {
            nextInput.focus();
            nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length);
          }
        });
      }

      // Bind card click buttons
      container.querySelectorAll('.fx-card-btn').forEach(function(card) {
        card.addEventListener('click', function(e) {
          e.preventDefault();
          const fxId = card.getAttribute('data-fxid');
          const gridEl = container.querySelector('#fxCardGridContainer');
          if (gridEl) savedGridScrollTop = gridEl.scrollTop;
          selectCard(fxId);
        });
      });
    }

    render();
  }

  global.renderFxLibrary = renderFxLibrary;
  global.stopFxAudio = stopAudio;
  global.FX_LIBRARY_DATA = FX_DATA;
})(typeof window !== 'undefined' ? window : globalThis);
