const input = [
  "XSXMAAXXSSMMMXMXSXMSXMXSAMXSXMASMMSSMMSASXSAAXAAMXMMAMAMXMXSMXSAMXAXSAMXSSSXMASAMXAAMXSXMASAMXXMAXXSAXAMXMMSAASMXMXMASMMAMXXXSAMMSMMSXMASXAA",
  "XXAMMSMMXMAMAASXSAMAMSAMASASMSASAAAAAXSASAMMMXSMXSAMSSMMASMSAAXXSXAMSAMXMMXMSAMXXXMSMAMMAMXMSSMMMSSMMSASMSXAMMMAASMASAMXSSXSASMSXMAMSASXMMSS",
  "SSSMAAXAAXAMMXSASXMAMMASAMXSAMAXMMSMMMMAMXMAXXAAASAMAAMSMSAMMMSMXMSAXASXSAAMMXSAMXMAMMSMXMAMAAMXAXAAASXMAMXMXAMSAMAXMASAXAXMAMXXAMMMMAMASAMX",
  "XAAMSSSSMSSXSAMAMAMXMSXMASAXMMAMXMXMMAMAMXSAMSMMMSXMMSMAAMXMMXSAAAMSSXMAMSMSAAXAXASMSAMMAXMMSSMMMSMMMXAMSMAXSXMMAMXXXXXMMMMMSMMSXMASXSSMMSXM",
  "MSMMAXXAAXAAMXMASAMXASXSXMASXSXMASXAXMAXXXMMMMAAAXAMXMMMSMAMXAXXMSXAMXMXMAMMMMSMSMSXMAMSSSXAXAMAASAMSSMMASXMAMXSAMXSMSMXAXAAAAXXAXAMAMXXXMXX",
  "XMASMMSMMMMMMAXAXMSMMSAMXAMXXASMAMMMMSSSMSSMASXMMSSMAMAMAXAXMSSXMXMMMXMAMMSSSXMAAAXXSMMSAMMXSMMMMXAMXAXSMXXXXAMXAMAMAAASXSMMSSMMMMAMSXAMAMMX",
  "SSMMMAMXAAAAXMMMSMXAXMAMXSXMAMAMASAMXXAAAAAMXSAAXAAMMSMMMSSSMAAXSAXMAXXASXAAMAMSMMSXMAMMAMXXMXAXMSSMSSMMASMSMSSSXMAMSMXAMAXAXAAASXSAXMASASAM",
  "MAASMSMSSSSSMSAAAXMAMMXMAXAMXXMSASASMMSMMSSMASXMMSSMAXMSMAAAMMSMSASMAXSMMMMSMAMXAASMSAMSSMMXMASMXAAXAXXSMSAAAXAAASAMMXMASAMXSXSMSAMMMAXAMSMS",
  "SSMMAAAAAXXAASMSMMMSMSSMMXAMAMXXXSMMXAAXMMAXAMMSMAAMSSMAMXSMMMXMXAMMMXSXAAXAMAXSMMXAXSXXXAXASAXMMSSMMSMAXMXMMMMSXMASMXSAMASMSAMXMXMMASMMASMM",
  "AAAMXMASMMMMMMAAXAAXAAXAMSMMASMMMMASMSSSSSSMXSAAMASAAMXASMAMXSASMSMXXAMMSMSAMXXSXSMSMMMSSSMXSAMXAAAAAXAMXMAXSAMXXSAMMAMXSSMAXMASMSXSMXAXAMAS",
  "SSMMXSXMASXAAMSMMMSSMMMXMAAXMSXAAAMXAXAAMAAAXMXMSXMMXMMMMAAMASASAXMSMASMMAXMSMMMAMAXAAXMAMMAMXMMMSMSMMMXASXMSASAMXASMMMAMXMXMSMSXSASAXXMXXAM",
  "MMMMAMASXMASXXASXAAXAASASMSMASAXMXXSMMMXMSMMMASXSXSAMXASXSSSMMMMAMAMMAMMMSMAAAXMAMASXMSMSMMASAMMMXMMASXSXSMASXMAXSXMAAXAAMSSMMAXAMAMSXXASMSS",
  "MAAMASAMAMMMMSASMMMSSMXASAAMSMMSMSAMMAXXMXXASAMAMAXAMSAMAAAXXAMMMMXMMMSXAMMSSSMXXSAMAASAAXSAMAMSASASAMXAAMMAMAMXMSSSMMXMXAAAAMMMMMXMASMAMAMA",
  "SSMSXMASASAAXMAMXAMMXAMSMXMXMAAAAMXMMASMMMSMSAMAMXMXMMAMMMMSSMMAASASAASMMSAAAAXAMMMSMMMSMMMAMSMMASXMASXMMMMXSXSXAMASAMASXMSSMMSAXASMAXMAMAMX",
  "MMMXXMASASMMSMMMSMSAMXMMAMXASMMMXMAXXXSASAAXSXMXASMMXXXMSAMXAMMXMSAMMSMAXMMMMMMMSAMAMXXAXXMXMXAMXMASMMAXSAMXMAXAMMAMXMAXAAAXAXMAMMXAMXMXSXXS",
  "MAXMAMXMXXASXAXAMMMAMMMMAMMMSXAMAXSSSMSAMSSMMSXMXAAMSSMXSASXMMSXMMMMXXMSMMASAXAASXMAXSAMXSSMMSAMXSXSASAMXASMMAMAXMXMMMMSMMMMMMXAMXXXMSXAAMXS",
  "SAXSAMXAMSXMSMMSSMSAMAAXAMXAXMSXSAAAMAMXMAXAXMXAXMAMAAMMSAMXAASASAXXASXMAXAMMXMMSXAXXAXXMMMAAMMMXMAMAMAMXXMAMASMSSSMSSMAMMSAAXMMXXXAXXMMXSAX",
  "MAMSAMXMXMAAAXMXAASASMSMMSMSSXMAXMMMMSMAMMMMMMSMMSAMSSMAMXMMMMMAMXSMAMASMMMMMXMXMMSMMMSMASMSMSSSMMAMAMAMMMXSSMSAAAAXAASMXAMSSMAMSAMXMMMSAMMS",
  "XMMSAMXMASXSMSMXMMMAXAMAAAAMMAMXMXSXXASMMMASAMAAXMAXMAMMSMSMSSMAMAMMSMMMMXXAXAXAAAAAAAAXXAAMAMAAASASASASXXAMAMMMMMMMSMMMMMXAMMXMAMAAAAAAAMXS",
  "AMXXMAXXAMMAXAMASMMSMAMMSMSMSAMMMASMXMASXSASASMSMMSAMMXSAAAAAMMMMSXAMMSASASMSMSMMMMMMSSSSMXMAMMMMXASMMMSMSXSAMMXXAXAXAAAAXAMXSMMXMSSSMSSSMAS",
  "XXAASASMAMSSSXSAXAAXMXMXMMMASASXMASAAXAXMMASMMAMMAAASXXSXMMSMXAXAAMXMASAMASAAAMMSSMXMXMAAXSSXXXAXMXMXSAMAAASASMMSSMSSMMMMSSXAMAAXMXAAAAAAMAM",
  "MMSXMAXMXMXAAXMMXMMSAMXASXSASAMMMASXSMXSAMXMAXSAMXSSMAMMSMAMASXSMXAXMXMMMMMMMMMAAAMMMAMSMMXAASXMMSAAAMAMMMMMMXAAXASAMXXXXAMMMXAMMMMXMMMXMMAS",
  "AAXAMMMMMMMMXMASAXXAMXMASASAMAMAMAXMMAAAMSSMMSAMXAXMMMSAAMAMXMAAXAMMXMAMXXAAXXMMSSMASAMAMMMMAMAAASMSMSXMMSAMXSMSMMMMXSSMMMSASAAXAASMSMSAXXAM",
  "MXXAMMAAAXAXXMAMMSSMMAMAMAMMMXMMMXSSXSMMASAASAMAMMSAAAMMMXMXAMXMMSSMMSMMMMSSXSAMXAMMSASXMAAXXSSMMSXXAMAMXMASXMAAMAAXMAMAAXSASXSSSXSAAASASMSS",
  "XSSMMSSSXSAMMMSXMAAAMXSXMXMMAXXXXMXMAMXXXMMMMAXXSASMMSSMMASXMMAMXAAAASAXSAMAASXMSSMMSAMMSXSSMMMAMXMMSMXMAMSMAMSMSSSSSMSMMMMAMAMXMSMMMMMAXAAX",
  "MMASMXXAXMASXAMXMSSSMMMAMXMAASMMSXAMAMXXSSMSMSMMMASMAXAAMAXAAASMMSSMMSAMXMMMMMAAAAAXMAMMSAAMAXMXMXMAAAXSXSMSAMXXXMAXXAAMMAMXMAMAXXMAMAMXMMMS",
  "MSAMMSMSMSMMMMXAXMAXMASAMASMMSAASXMMMMSAMMASAMSAMSMMMSAMMSSMMMXAAAAAXMXMSMAXASMMSSMMSMMAMMMSXMSMSAMMMSXMSAMXXXXMSAMXMSMSXXMASAMXXMSSSMSASAMX",
  "MMASXMAAAAXXAMSSMMMMSASASXSAASMMMMXAAAMAMMAMMMSXSAAAAXAMAMAMXXSMMSAMXAXMXSAMXXXAXAMMAMMSXSASXAAASMSSXMASAMSMMMMXSXXXAAAMMMMASASMSMAAAAXAMXSS",
  "XMAMAMSMMMSAXMAMXXAMMAMASMSMMSAAAXSMMMSMMMXSMASMSMSMSXXMXSAMXXMXMAXMMMMMAMMSSSMSSMMSASAMSMASMSMMMAAXASMMXXAASXAAMMMSSMSMASMMSAXAAMMSMMMSMSMM",
  "SMSXMMMXMSMMMMMMAMSMMSMMMAXMASMMSMXAAMAMXMASMASASAMXMAMXASASMMSAMAMXAAAMASXAAAXAAXMSAMXXAMXMAXMSMMMSMMMMMSASMMMXMAMXMAMXAXAXMMMSMMAMAAAAMAAX",
  "AXXASASAMAAAXAAAAAXAAXAXMMMMXMAXXAXMMSASAMXSMMMXMAMASXAMMSMMAXSXSSSSSSSSXSMMSMMMSMXMASMSMSXSXMXMAXMAAAXXAAXMMXAMXXMXMAXMSSSMAAAMAMASXMSMSSSM",
  "MMSMMASMSSSMMXMSMSXMASXMXMASASMMMMSMASASASASASXSSXMASAMMXSMSSMMAXAAAAAAAMXMAXXSXMAXMXAXAAMAMAASASXSSSMSMSSMMXMXSAMSMMASAAAMSSMMXAMAXMXMMXAAX",
  "XAAAMMMAAXMAXSAAAXAMAXAXXXAMMSAAXAAMXMASXMASAMAMAMMXXAXSAMAAXAMAMMMMMMMMSAMXMASASMXXMMMMSMAMSXMAMMAMXAMAAMAXXAAMMMAAXMAXMMMXMAMSAMXSMAMMMXMM",
  "MSSSMAMMMXSAAMSMMMXMASMMMMSSXMMMMSSSXMXMXSXMAMAMAXXAMSMMASMMSSMXMAAAAAAXSMXMSXSAMXSXMXAAAMXMMAMSMSSSMXMMMSSMAMMSXSSSMMSXXXAMMAMMMMXAMASAXMXM",
  "XXAXXASMSXMXSMXXXAMAMSXAAMXAMXASXXMAXMMAMAMSAXMMXMMMXXASXMAXXMASXSMSMSSMMSAMXAMXMAXAMSMSSSMSSMMAAMAXMASXMAMSAMXMAMMAMAAMXMAMMASXSXSMMMSAMSAS",
  "AMAMXMSXMASXMMSMXMSAMXXSXMSAMSXSASMASXAAAMXSAMSASASXMSAMXSXMXMSMAXXMXMMXAAXXMAMXMMSMMAMAAXXXASXMSMXMASXAMAMAXMAMAMSAMXSSSXMASMSAMXXAAMMMMSAS",
  "XMASAMXMXMMXMASAMAXAXAMMMMMAMXAMASMAXASXSXAMMMXAXASMMMSMAAAAAMMMAMAXXSAMSMSXXAXMAXAMXAMMSMMMAMXMAXSMMXMXSSSMMSMMXMMASAMAMXAAXAMAMAMXMSASMMMM",
  "ASASAMMMAMXXMMMXAMMSMSXSASXSMMAMAMMSSXMAAMXSSMMMMXMAAAAMASMSMSAMMSSMAMMMMAMASMXMSSXSSMMMMMSAMMXSMSXAAMXAMMAXAASMSMSMMXMAMSMMSSSSMXSAAMXMAMXX",
  "MMASAMSXMMMXMSMSSXAXAXASXMAAASMMXSAAXAMSSMAMXXAMXXXSMSXSAAAAASXSAAAMXMSAMAMAMXAXMAXXASAAAAXMMMXMXAMSMSMMSSSMSSMXAAXXXSSXMXAXAAAXMASMMMMSXMSS",
  "XMXMMMMASXSXSAAAAMMSAMXMAMSMMMXSAMXSMXMXAMXMASMSMMMMAMAMXSMMMMMMMSXMXSMMSSMXSMXMMXMXAMSXMSSMASAMMAMXASAMXAAAXMXSMMMMXMAXSSSMSMSMSAMXASXMASXA",
  "XSAMXSSMMAAXMMMMSAAAXXAMAMAAMXXMASXMASXSXMAAXMMAASXSAMXMXAMXAXAAXXMSMXAAAAAAMMSXSASMMMAXSAMXXMASXSSMMMAXMSMMMAAMMAAMMMSMXAMAMAXMMMXSAMAXMMSM",
  "MXMXMAAAMMMMMSAMXMSSSSSSMMXXMSAMXSXMSMMXMSSSMMSSMMAMXMXMSXMSMSSSMMAAAXXMSSMMSMAAMAXXAMASMASXXSAMAAXMMSSMAMXMMMMSSSSMMAMXMXMAMMMSAAMMMSXMAAAX",
  "MMMAXMSMMMSAAMASXMAMMAMXMASXMSAAAXMXMXMXMAXAMAAXAMXMAMAAMAMMXXXMMMSMMMAMXMAMAMMSMMXSXSMSXMMAMMAMMMMXASXMAMMMASXMAAAMMASASXMMSMAMXMXAAAASMSSS",
  "SASMSAXMAAMMXSAMAMMSSMSAMXAAASAMXSMAMAMASMSSMMSSSMMSSSMXMAMAXXAXMXAASXMMASAMMXAXAXXMASMMASMXMXAMAAAMXSXSASASASAMMMMSSXSASAXAAMMSASMMMSMMAMAM",
  "SMSAXMAMMXSAXMASXMXMAASXMASMMMXSAMMASASASAAAAXAXMAMXXAASXSMMSSMMSAMXMAASASXSXMSSMMMSAMASAMXAMSMSSXSAXMASXSXMASMMMXAMXXMASAMSMSASMMSAMXMMXMAM",
  "MXSMAXSXXAMMSMAMXMAMMMMAMAMXMSAMASMMSXXAMMMMMMSMSAMSMMMAAXAXAXMAMMXSSSMMAMXAMXAAAAXMAXAMAXMXXAMXXXAMAMAMXMAMXMAAXMSSXMAXMAMMAMASAMSMMSMXXXAM",
  "MAMXMSXSMAMMMXAXAMMMMXSXMAMMXMAMAMXAMXXXSASXMAXASAXXAAXMMMMMSSMXSXAXMAASAMAXMMXSMMSSMMASAMSSMAXAMMSMXMXSMMSXMXSMSXXAXMXXMAMMMMAMXMXXAMMAMSAS",
  "MASAMXAMSSMMMSXXMXSASAMXMAMXXXMMSSMMASAASMMSMXSMMSSSSMSXMAAAAAAAXMASXSMMASMMXXXAMXAAXSAMAXAASMMMAAAMAMMMMAAASMMASMSMMMSMSMMAXMXMSMMMSSMMMAMX",
  "SASAXMAMAMAAAXMSMAAAMXSAMXASXMMAAAASASMXMAAXMMMMAXMAMXMASXSMSSMMXSXAMAXXAMXMASAMXMMSMMASMMSMMSAXSSMSASXSMMSSMASASAAXAXAAAASMMMXXSAMAAAMSMASM",
  "MASAMSMMMSSMXXAAMXSMMMMAMXXAAAMMSSMMASXMSMMMXAXMASMAMMMXMMAAXXAMASMXSAMMSSMMASMMXSMXMMMAXXMAMXXXXAASASMAXAXXMAMAMMMSMXMSMMAMSMSXXAMMSXMAAXMM",
  "MAMAMSAMXAAAAMXMSMXAXXSAMXMAMMMAAAAMXMAMAAMSMSSXXXMAXXXMMXMXMMMMASAAMASAAAXMASASAMMAXAXMASXSMMSSMMMMXMASMXSASXMAMAMAXAAAMXMAAAAXSSMMMASXXMXX",
  "MMSMMSAMXSMMMSAAAASXMXMASAASMSXMSSMMSSMSSSMAAMAMSXSASMMSMSMASAMXMMMMSXMMXSMMASXMAMSAMXXSMXAAXXAAMMMMAMSMMXSAMXMAXMSASMSMSAXXMXMXAMAAXMMASXXS",
  "MMXMASAMXMASASMSMMSMSSSMMXSMAMAMXXMAAAMMAMXMMMAMXAMASAAAAMSAMAXMMSMMMXXAAXAMAMAXAMMMMSAXXMSMMMMSMAASAXAASAMXMASXSAMXSAMASASXSMXMASMMXAMXMXAA",
  "SAMMMSAMXSAMXXAXXAXAAAASXXXAAMMMMAMMSSMMAMXMXSXMMMMAMMSMSMSSSSXSAAXAAXMXMSAMSMSMAMAAAMXMAMAAXXAXMSMSSSMSMXSAMMSXAXXXMXMASAMASMASXMMXAMXSMMAM",
  "SAMXXSAMXMMSMMSMMMMMMSMMMASXMXXAXAMXXAXSXMASAMXSAXMXSAMAMXMAXAAMSMSMMSMMMSMMXAXSMMMMMXASMSMSMMXMAXAMXMXAAASASXXXMMSMMSSMMAMAMMXSMAAASXMAMAAM",
  "SAMSMSAXMAXAAXXAMXSXAAAXMAMXAXSXSASXSMMSASASASAMSSXAMMSAMSMXMMMMAXXAXAAAMMAMMXMAMXAASXMSAAAAXXXMASAXAMSMMMSMMMMMXAXAAMAASXMAMMXMXMMMMASMXSMS",
  "SAMXAMXMMMSMSSXXMAMMXXMMMXXMSMAAMAMAMXASAMXSXMASAMMMSASAMXAXSXSMSMSXSSMSXSAMXASAMXMMMAAMXMSMMXMAMXMMAXMAMMXAASASMSSSMSXMMMSXMSAAXXMASAMMAMAM",
  "XAMXMMSSMMAMXAXSMSXSASMMSAXSAAMXMAMAMMXMAMAXMMXMMSAMMMSAMMMMMASAMXXMAAAMAXAXXMXAMSSSSMMMMMMXXMAAMAXMXMSAMSSSXSMSAMMXXSMMAXAAASMMMXSAMXMMASAA",
  "XXXAXSXAASMMXSMMAMAMAXMAMMMSASMSSMXSMSASAMMXXXAXXMAXAASXMAASMAMAMAXASMMMASMMSSSSMAAAXXMXXAAAMAXAXXSMSAXXSAMXMMXMAMAXXMASMSMMMSAXSAMASMMMMSMM",
  "MSAMXAMMMMAMXXAMAMXMXMMAMMMSAMXXASAAASASXSXXMSMSAAMSMMSMSASMMMSAMSSMAXXXXSXAXAAMMMMMMXSMSMXSASMSMAMMMSXMAXXMASASAMXMMSAMXXXMAXXMMASAMMAAAMAX",
  "AAMMXMSSMSAMXSSMSSSXMMSMMAMMMMAMAMMMMMAXMAMAAAXMASXAMMMXXXXMXXMAAMAXMSXSAMXSMMMMXXXXMXMAAAAAMXAMAAXAAMMMMMMMMSXSXSAXMAMSXAMXSXAMSXMMSXSSSSMM",
  "SSXSMXMAASMSXMXMMAXSAMAMSMSASXSMSXXXAMXMXAXMSMASAMXXXAMMSMSMSXSMMSMMXSAMXMAXASMXMXMMAAMXMMMSXMMMXMXMMSAAAMXXXXAXAMMXXMSMMMMAXMMXMXMASAMAAXXA",
  "XMAMAAMMMMAMAMXSMXMXMMAXAASASAXAMXMXASMMSSMMAXXMASASMMMAAAAAXAXAAXXMAMXMAMASAMAAMAAXSASXXSAXXAXSASXAAXXSSMMAMXAAMSMSMMAXAAMXSAXMMXMAMSMMMMMS",
  "MMMMSXSXMAMSAMAMMSMXMSSSMXMMMXMMMASAMXAAAAMMSMXMAMXMASMXMSMSMMMMXMASAMASASAMXMSSSMSXMAXXASXSXSASASMSMXXXMAASXAMSXAMAASASXSSSMXSAMAMMSXXMAMAX",
  "XSXAXASAXAXSXMASAAMAMAXAXMAMASMXSASASXMMSSMAMMSMXMAMXMSAAXXXAMASAMXASMAXASMXAXAMXMXAMXMMAMAMAAXMAMAXXXXAMXMMAMSAASMSMMMSAXMAXASXMAXXAMXSASMX",
  "AXMMSMMMMXMMXMMMMMSASMSMMMSMASAAMXSXMXSAMXMAXAAXMSSMMAXMXMASAMSMMSMAAMXSXMMASMMSAASXMASAAMAMMMMMSMMMAMXAMAXSAMMMXXAXAMMMMMSMMMSASMSMASASXAXX",
  "SSMXAMAASMMSAXAXAMXXSXAXMAMMAMMMSAMASMMMSMSSMMMMMAMAMXXXSAMSSMXMSAMAMXAMAAXMAAXSXMAAXXXSXSAXXAXMAAXMAXSAMAMMMXAXMMSMMMAAAXAXAXSAMAMMMMASXMXS",
  "AXMAMSSMSAAAMSSSMMSAMXSMMXXMASXAMASMMSAXSMAXMASXMASXMMMSAMXMAXAMMASMXMMSMMMXMSAMXSXMMMMMMSMXSXSSSSMMAMSXMXSASMMSAXXAASXSXSAMXMMAMXMAXMXMAMAS",
  "MSSXXAMXMMMMMMMAAAMAMAMAMMMMXMMXSMMAASXMSMSMSASAMXSXAAMMMMASMMSSMXMMAMXAAAAXXXAAASMMSXMAAMMASMMXXAAMSMSASAMMSAMXMXMMMMAAXXMXAXXXMASXSAMXMMAS",
  "XMAMMMSXXXAXASMMMMSXMASMSAAXSXAAAMSMMMSAXAXAMMSAXMMXSXXAXSMXAAAAMAAXAMXSSMSMASXMAMAAMASAMSMASAXMMSMMMASAMXXMMMMMMMMSSMMMMSSSMMAMSMSAXAAXXMAS",
  "XMAMAAMMMSSSMMAMAMXMMXSASMMSAMMSSMXAAXMSMXMASMXMXASMMMSMXASMMMSSSSSMMXMAMAAMMMMSSSMMSMMASXMAXMMMXAAAMMMAMAMSMSAXXXAASAMXAXAAMSMMAXMXMSMSAMXM",
  "XSASMXSAXAAMASMMASAMXAMXMASXMXAXAXSMMSAMXXSMMMAMSMSAAAAXSAMSAXAMAAXAAMMAMSMXAAAMXAXMAMXXXXMXSSSMASMMSXXAMAXAASXSMMMSSMMSSMMMMAAXXMMMMAAXXMSM",
  "MSASAXSXMMSMAAASMMASMXMAXXXAXMMMMMXAXXMXSXMMASAXXASXMMSMMAMSXMASMMSMMMMXMASAXMSSSMMSASMMMMMSXAAXAXAAAXXSSSSMXMXSAAMAMAAMASAXSASMSAMASMSMSMAS",
  "MMMMMXMXMXXMMSMMMMAMMASMSAMXMMSASASMSASAMXXSASMSMMMSMAXAXAMXMXXMXXXXXSAMXMXSAAMAXXMSASAAAASAMSMMMSMMMSXAAMMXAMMMSSMMSMMMSMXXMXMAMASAMXAAXSAS",
  "MAMAMASASMXXXAXXAMAASMAMXXAAMXSASAAASAMAMSAMXSAMAAASMSSMMMXAAXXASMSAMAXXXXAXMMMMMXAMAMXMXXAAMAAAAXAAAAMMMXSSMSMAAMAXXMSXXAMSSMSSSMMAMSMSMMXS",
  "SASASXSAXAASMMSSXSSMXSAMMMMASAMAMMMXMASXSMXMASASAMXSAASAASXSMSMAMAAXXAMSSMMSXMAXMMMMXMASMSSSSSSMSXSMSSXSAAMXAAMMMSMMMMMXMAMAAXAAXXMAMMAAAMMS",
  "SASAAAMXSMMMAAAXMMMMMMXSAXSMMXSMMXXXSAMMAMXMASAMXSXMMMXMMSAAASMAMXMXMMSMAAAXMMMSAAXSMMMAAXAAAAAMMMMMMXAXMSSMSMSMMMMAMASMMMMXSMMSMMSSMSSSSMAX",
  "MAMAMXMXAXSSXMMSSSMAAMSMMMASAASXMXSXMASXMMXMAMXMMAMSMMSSMMMMMMMAXASAAMAMSMMMMAXSMMXAAAXMXMMMMMMMSAMMSMSMAAMMXXAXMASMMAXAAAAXXXMAAAAXAAAXXMSS",
  "MSMSMAMXMSMASASAMXMMXMAAAXMMMSMAMXMAXAMXXMSMASAXMAXAAMAAXSASAMSMXASMMSAXXAMAMSMMSSMSSMSXSXMXMXMASAXMXAAMMMXMASMMSAMXMSXXMMSXXAMASMMMMMSMXMAM",
  "MAAMAMXAXAXMAMMMSMXMXXMSSSXXXAXAMSAMXSAMMSMSAXXSXSMSSMSSMAMMAMASMAMMMMMMSAMXXMAAAXXAXXSMAMMASMMMSAMSMMMSMMMXMSXMMSXMAMASXMMMSSMXMAAXXMAMSASX",
  "SMSMXXXASMSXXXAXAAAXMSMAMMMSSMSSSXMXAXAMXAAMXSXMAXAAXAMXAMXSXMAXMAMXAAMXSAMXMSMMMSMMSXXMAMSAMAAAXAXXAAAXAMXSXSAMAMXSAMXMAAXAAXMAXSAMXSAMMAMX",
  "MAMAXMMMAXAXXSSSMSMSAAMAMAAAXAAMMMAMXSAMSMSMXAASAMMMMXMASXMAMMXMSMSSSSMAMASAMAXAAXAASMSMAXMASXMSSMMSMMSSMMAMMSAMXSXMASMSMMMMMSSSMXASAMAMMXMM",
  "MAMAMAASAXMMAMAMXMAAMMSSSMSSMMMSAMXMMMMMXAAAXSXMASXSAXSXMASMXSAMAAMAAMMSMAXAXSSMXSSMXAAMXSSXMXXXAMASAAAXXMASASAMMAASXMMSAMXSXAAAASMMASAMMSMS",
  "SSMMXSMSMSMMMMASAMXMAXAAAAMXAMASMSASAMASMSMSXMASXMAMSMMAMMMXASXSMSMMMMAAMMMSAAAMAMMXMSMMMMXMAMXSSXASXMMSXSSSMSAMAMMMAAASAMAMXMSMMMASAMASXAAX",
  "MMASMMAMAMXAXSASASMXXMASMMMSSMAXMMAMXSASXXAMMXAXAMXMAMSSMSAMXSAXXXXMMMSSSMAXMSSMASMSMXSAAMAMAMXXAMXSASXSAXAMXSAMSMASMMMSMMXMAXAXAMXMASAMXMMM",
  "XSAMAMAMSXSXXMASAMXMSXMXMAXMMMSXSMSMMMMXMMSMAMXSSMSSMXAMAMSXAXMASXMSAAXAAMXMMAMMXSAXMAMXMSASASXMMAMSAMMMMMSMMMXMAMASASASXAXSSSMSXSASMMMXAMAA",
  "AMAMSMMMAASMXSASXXSSMASXSMSAMXXAMAMSMASXXAAMAMAAAAAAMMMSXMXMMMMMMMASMSMSMMMSMASXMMMMMMSAASASMSMAXMXMXMAMSAMAMXSSXXMSXMASMSXMMAAAASMMAXMSMSMS",
  "XSAMXAXAMXMAXMASAXSASAMXXXMXMASMMMMXSAMAMXMMASMSMMMSMMAAASXAAAAAAXXXAXXMAMSAMAXXAAXXAAXMMMXMASASXMMSMSMSMASXMAXAXSAMMMSMXMASMMMMMMASXMMAXMAM",
  "XXASXMMSXSMSMMSMMMSAMXSMMASAMXXSAAMMMMSSMASAAAAMXMXMAMMSSMASXXSSSSSXXSMSMXSASASMMMSMMSMMASAMAMXMAMXAXAXXMMMXXXMAMSAMMSMAXSAMXAMXSXMASXMAMSAS",
  "MSMMASAMSXAAXXAAAXMXMXAXXMAMMAMSMXXSMAAAMASAMMMMXAASXMAMAMMMSMMAMXXMMMMAMASAMXSAAAAAXAASAXAMXSMSAMSMMSSMASMMSMMMMSAMXASMMMXSSSMMXMXAMMASMSAS",
  "MAAXAMAXMMXMAXMMMXMASMMMSMAMMAMMSMASMMSSMXSAMXXMMSMSAMXSMXAAXMXSAMXXAAMAMMSAMASXMSSSMSMMASMMMMXMAMAAAAXXAMAAXAAMMMXMMXXXMXMAAMXSAMMXSAMMAMAM",
  "SSXMXXMASMSSSXXASASASAXAASASMMMAAMXMAMMAMXSMMXAXXAASXMAMXSMSSSMXAXMAMMMSMXXAMXSXMAXMMMAXAAAAAMMMMMSMMSMMMSMMMSASAMSSSMSSMMAMXMASAMAAAXMMSMAM",
  "XAXSMSSMXAAAMMSXSASASAMSMSMSASMSSSMSXMXAMMMMSSMSSMXMXSXSASXAAMASMMSMMSAXMMSXMXMASMMMSSXMASMSXSAMSAMXAMXAAMASAMMMASAAAXAAASXXSMMSMMSSMXXXXSXS",
  "MSMXAAAXMMMMMAMMMAMAMMMXXSXMASAAAAMMAMSSMMAAMAXAAXAXXMAMASMMSMXMAAAAAMASAAAAMMSAMAAAAMAMXXAAMXXAMXMMSMSAMSAMAMXSMMMSMMSSMMSMXMXMMAMAXAMAMXMS",
  "MASXSMMMMAAAMSSXMAMXMASXAXXMAMMMSMMSAMXAASMSSSMSSMSSSMAMMMAMAXASXMMMMSAAMMSXMASASXMMSSSMSMMMMAMMSSXSAAMAAMMSMMAXAXXXAXXAXAMXAMAXMAMXMXMAMAAX",
  "SASMMMAASXSMSAAMSMSMSASMAMMMMSAMXMASMSSMMMAAAAAMXAXAXXAMASXSAXMXMMXAMMXSAMXMMMSAMXMXAAXAAAAAMAXSAMXSASMMMAMAAMXSMMSSXMSXMXSSMSSSSMSSSXSASMSS",
  "MASAXMMMSXAMMMSMSAAXMAXAXXAAAMMSAMASXAXASMMMSMMMMXMAMXSSMSAMXXSAMMSMSMAXAXMASAMMMAAMMMMMSSMSXSSMASAXMMXXMASMSMMMMAXAAMMAMXXAAXMAAAAAMASAMAAM",
  "MXMXMASAMXXXXXMAMSMMMSMSXSSMMSASMMASMASXMASXAAAMMMSSMAXAXMAMAMMAMAASAMXXMSSMMMXAMXXXXXXXAMXXAMAXAMXSMSXSSXMAAAAXXMXMMMSAMMSMMMMSMMMSMAMAMMMS",
  "MMMAAMMAXXSSMSMXMMSAXMAMAMAAAMXMXSXXMMXXSSMSSSMSAAXAMSSMMSAMASXSMSXSXSXXMAMAMSMSSXSAMXMAASAMXSAMXMAAAAXMMAXSSSMSMMSMMXMAAAXAMXMAMMXMMMSSMMMX",
  "XAMXSMXMMAAAAMMAMMMSAMAMAMMMMMSAMMAXSMMMMAAAXMAMMMSAMXAXAXASXSAXAMXSAMMAMAXMMSXMAASXAAMAMMXSAMXMMMSMAMSSMMMMAXMSAAAASMSMMMSMSMSSXSAAMAAAAXXM",
  "SSSMAAASMSMMSMMASAAMMSASAMXAMXAAAMSMXAAAXMMSSMMSAMXMXSMMMMXSAMXMMMAMAMXXAMXMAMAXMMMMSXSASXAMXSXXAAMXMXAXAXAMXMASMMSSMAAXSMSAAAMAASXMMMXXMMMX",
  "AXXAMSMSAAMAMASASAXMASXSASMSSXSSMXAAXSSXMXAMMAMSASASMAMASMMMMMMXMMAMMMSSMSAMASXMXAXMXMMAMMXMMAMMMXSASMSSXSSSMMMXMXMXMMMSMAMAMSMMMMMSXSSMSAMS",
  "XMASXXXMMMMASAMXSASMASAMAMAAMXMAMSMSMMAMSMMSMSMMASASMXMAXAAXSAAASMMXXAXAAAMSASAMSMSAMXSAMXXXMXXXAXSAMAAMXXAAXSMAMAMMXXXMMSMXMXXXAXAXAMAMSASA",
  "XMXMXMXSXXMXSXMAMAMMMMAMXMAXMASAMSAMXMAMMAMXXXAMXMAMASMASMMMSASASAAAMSSMMMXMMSAMSASXMAXMMSSXMSSMMMMMMMMSMMSMMAMMSMSAMSSMAXASXXSSMSSMMMAMXXMA",
  "MSAMASAMMMMAXASXMXMAXSXMXASXSAXMSMXMMMMXSAMMXSAMXMXMMXMAXMAXXMMASMMSXMAMAMAMMSAMMAMXMMXSAMXXSAMXSMAXXXMAXAXASMAXAMXXMAAMASAMXAMAMAMAXSMSSMAX",
  "ASASAMASAAMAMXAXMAMXXMAXXMAXMXMMMMXMSAMXSASAMXMXSMSMXSMMMSXMAXMXMXXMASMMASXSAMASMXMAMXAMXMMSMASAMXSMMMSMMMSMMXMMASAMMSSMASAMXXMAMAMMMAAAAASM",
  "MSAMASASMSSSXMMMMSSMAXMASAMXMSMSAMAXSASASMMMAMMAAXMMAXAAASASXMXSXMAMMMXSXSAMXSAMMASASMMMSAMASAMXSAXAAAAMAMAMMAMSAMAXAXAMASAMMMSMSXSSSMXMMSXA",
  "MMMSXMASMMMMAMXXAASXXAMXAAXXMAMSAXXXSXMAXXAAAAXSMXSMSSSMMSAMMMAMMSMMAMASMMXMXMXSXXMASMXASASASMSAMMSXMSMSMSASXMXMMSSMMSMMMMAMXAAMSXMXXXAMXMMS",
  "XAMXMMAMASXSAMAMMSSMMSSMSSSMSXXSAMSMMXSASXSSSMMASAAXMAXSXMMMSMASAAAMXMASXSASAXAMMMMSMMMMSXMASAMASAXXMXASMSXMAXXXXAXAAAXASXMMMSSXSASMXSXSASAM",
  "MMMAMSSSMMASASAAMMXAAAAAAAAAMMAXAXSAMAMMXAAMAMSAMSXMAAMXMASAMXAMMSSMAMASAAAMAAXSAXXXASXAXMMMMXMXMASXMSMMASXSXMMMMMSMMMSMSAAXAXMASMMMMSMMASMM",
  "MASAMSAMXMXMXSMSMAMMMSXMMXMMMAMSMASAMXSAMSMMAMMMMXMSMMSAMXMASMSSXAAMAMXMXMXMXMSAXSASAMMMSAAAMAMXMAMXAAAMXMASAMAAAAAAAAAASMMMSSMAMAAXAXAMAMAM",
  "SASXSMMMXSMSAMXAMASXAXMSSXMAAXXMXMSMMASAMXASXSASMMASAMSXMXSXMAXMMSMMMSAMXXAXAMXMMMXMMMXXAXSSSSSXMSSMSMSSXSAMASXSSSSSMSMXMXSAMAMASMMSMSSMXSSM",
  "MASXXXXXMMAMMMSASASMASAAAASXSSSMAXSXMAXXMSAMMSAMXMAMAMXMAXSAMXMXAAAAXMAMSXSSMSAXXXSXMASAAMXAAXAXSAMXMSAMXMAMXMAAAXAXAMXMSXMAMSMMMAXMMSAMXMAS",
  "MAMMMSMSAMAMAXXAMAXAMMMMSXMAAAAXMSMMMMXMXAMXAMSMXMXSXMXXMAMXSAMMSSMMSXSMSAAAASASXXXASASASMMMMMXXMAXASMMSMSSMMMMMMMXMMMSSMMSSMAASXMMAXSAMXSAM",
  "SSSMXAAAXXASMSMXMMMXXAXAXAMXMSMMXAAMMAASXXMSSXXMAMAMXMXMSSSMSAMMAXMASAMASMMMMMMAMASXMASAMXXXAAAMMSSMSMXSAAXAAMAMAXXAAAXAAAAAMXMMAASAMXSAMXMS",
  "SAAXXMSMSSMSAXXAAAASXSSSSMMXAMXAMXMMMMMXAAXAMXMAXMSMAAMAAMAASAMMAXSAMAMAMAXMXAMAAXXXMAMAMMMSSSMSAXMAMXAMMMSSMMXSSMSXSSSXMMSSMSSMSMMAAXMSAMXS",
  "MSMMSAAXMAMXMMMSSMXSAAAAAMMSSSMXSASXAXMMSMMASMMAXSASASMMXSMMMMMMAMMASXMXSXMXSXMMMMSMSASMMSAMAAAMASXMSMMSSMMMXXXXMASAMXMASAXAAAAMMXMMMMSAMXAS",
  "XAMAAMSXSMMXXSXAAMSXMMMMMSAAAXAAMMMSASAAAAXSMXMAXSAMMXMSMSAMXAMXMXMXMAXAMAMXSMMSAASASMXMASMMXMMMXMASAMMAMAAAXXMSMSMMMASXMASXMSSMSSMSAMXXMMMS",
  "SASMMXAASXMXMMMSSMAMSMXMAMMSMMMMMSAMXSMSSSMMASMMXMAMMSMAASAMSXXAXMAXMSMSSXXMXAAXMSMMMAXMXMASMSAMASXMAMMAXSMMSMAXMMAAMXMXXAMXMAMXAAXMASMXMAAX",
  "SXMAXMMXMAXXSAAMAMXSAAAMASXXAMAAAMMSASXAAXAMXMASMMMMAMSMMSAMXSSSSSXSAXAMMMMMMMMSSXMAMXMSMXXMASASASMSSMXMXXAAMMSMMSSMSMMSMASMXXXMMSMSXMAASMMS",
  "MMSXMASXSXMAXMXSSMSMMSMSMMMSMMMMSSSMMXMMSMSMAMXMMSMMXMSXXMAMAMSAAAAMXMAMAAAAASXMMAMXXMAAXSAMXSXMAMXXASXSAMMMSAMXXAMMAAXMSAMXXXXXXXAAAMMMXAXA",
  "MAXAMXMASAMMSMMSXMAXMAMXMXMAMASXXXMASXAXXAMXSXMXXAAXMXXMSSMMAXMMMMMMMSSMSSSSSSXMMMMMMSSMMASMAXAXXMMMAXXMAMSAXXSMMMSSMXAXMXSMMSMMMMMSMMAXSSMX",
  "MSSSMSAMSXMMAAXXAXAASASAMMXASAXAAXSAMXSAMXMAMASMSMSMSMAAMAASMMSASXXXXAMMMAMXMMMXASAAXAAXSAXXXMSMSAAMMAMMMMAAMXXAAAAAMMSXMASXAAAAXAMAMXXMAAXS",
  "AXXMAXXXXXMSSSMSMMSASASXSASMMXSSSMMMSAMMSSMSMAMAAXMAASMMSXMMAXSAMXASMMSSMSMMAAXMASXMMSSMMASMSAAAXXXMXASASXXAMMXSMSMSXAXAMASMSSSMSSSMSAXMSMMA",
  "MSMMAMSMMSAAAMAAXXXAMAMAMMSAAAXAXMASMASMMAAXMMMSMMMSMXMMXMMMXMMAMAMXSAAXAAAMSASXMMMXAMXAMXXAMSMSMMMMSXSASMSMAXXXAXAXMASAMXSAMAXMAMXXMAXMAAAS",
  "XAAMAMAAASMMMMSMSMMXMAMAMXXMMMMMMMSMSAMASMMMXXAMXAAMXMSAMAAXSXSASXSAMMSMSSSMMAXXAAMXSMMXXAMSMAMAXAAAXAMAMASMMAMMAMMMAAMMXXMAMAMMXMXSSSSSMXXA",
  "SSSMMSSMMMXXXAMXSAMASMSMSMXXXXAAAMMAMXSMMXMMXMASXMXSAMSASMMMSXXASAMXSXMMMXMXMXMXMXSAXAXSMSAASMSASXMMSXMAMMMAMXXMAMASMSSMSSSMMSSMSAXXAMAAAMSM",
  "AXAXAAXASMMSAAMAMXSAXAAAAMMMMXSMSSMAMXAXMMAMXMMAMAAMAXSAMMSXSAMSMMMAMAAMXAMASMMASAMXSAMXAAXXXXMMXXAMXASXSSSMMSASXSAXXAAAAXAXAAAMAXMMMMSMMMAX",
  "XMMMMSSXMAASMSMAXAMXSSMSMMAASXMSAMXAMXMAMSAMXSMAMMMSMMMXMXSAMXMAAXMASXMXMMMMXAXAMAMAXMMMSMMSSSSXXAMMXAMAMAAAAAMSXMASASMMMXSMMSMMMXXAMXMXAXSM",
  "SMXAXXAXXMMMAMMSMASMXXAAMSSSSXMMXXSMXAXMASASAXMAMAXAAASMSXMAMMSMSMSAMMMXMAAXSMMMSSMXXAAAMAXXAAXMMSMAXMMMMSMMSSXSAAAMAMXMSAMXMMXSXMSSSMMSMSXS",
  "SMASXXSSSSSMMMAMSMMAAMXMMAMAMAXMMMMMXSSMXSAMXSSMXXXSSMXAAMSSMAAXXAMASXAASXMMAAAAAAAASMMSSSSMMMMMAAMXSAAXAAAAMMAXMMXSAMXAMASXMAAXAAXMAAAXSMAA",
  "XAAMXAAAXXAMXMAXAXXMMSAMMSSSSXMAASASAXAMAMXMXMASAMXXXMMMMXAXMXSMMXSAMMSXSASMSSMMSSMMXXAAXMXMXXSMSXXAAXXMSSMMSMSMSAMMMMMXSAMAMMMSMSXXSMMSAMMM",
  "MMMSMMMMMSAMXSXSMSSXAXAMSAAXAMSMXSAMXMAMMXMAMSAMXAMMAMSMXMMSSMMMSAMASAMXSXMAAXXMXMAXMMMMSMMMMMMMXAMSSMXXAAAXAAMXMAXSMXSMMXSAMMXSMMXXXAXSAMSX",
  "AAAXXAAAMXXMXSAAXAMMMSXMAMSMMAMMAMXMASXMSAAAAMMSMXAMAMXAMAXAAAAXMASMMXSAMMMMMMAXAMMMSXAAAAAXAMAAMAMMAMMMMMAMMSMMSSMAAASASASMMSASAMXMSMXXMMSX",
  "SMSXSSSMSMMMAMMMMAMAAMXMSXXAXASMSMMSAMAASMMXSAAAAXSSSSXAMSMXSXMXSAMAXAMAMMAMAMMMSMSAXSXSSSMSSSSSSSMSAMMASMASAAAMAMXSMMMSMASAAMXMMMXMAXXXSAMM",
  "XAMMMXXXMXAMXSAMXSSMXSAMAMXSMASXAAMMASMMMMXMMMSMXMAAAXXXMXMMMMSMMMSSMMSSMSASASMMMAMXXMMMMAXXMAXXXXASXXMAMSAMXSSMASXXAAXXMSMMMSMSAASXXSMMMASA",
  "SASMSAMMMMMXAXAMAXAAXSMSASAMMXXMSXMMMMAXMSAASAMASMMMMMMSAMXASAMAAMAXAAXAASASASAAMAMSAXAAXXMMMSMMMMXMASMAMMXMAXAXAMASMMSAMXAXAAAMMMMXAMXAMXMM",
  "SAAXMXMAAASMSSSMMSMAMSASASAXSMMMMXSAMSSMAXSSMAMAAXXAAAMAAMSMSASXMSMXMAMMMMAMXSMMSAMSASXSSMXXAAAAAAXMAMMXMASMMSAMXSXMMAMMASMMMMSMMSMMMSASMSMM",
  "MSMXAASMSXSAAAASMXXAAMAMAMAMAAXSMASAMAAMSMMXMAMXSASMSSSSSMAASAMXXAXXSAMXAMXMAXAXSMXMAMAAMAXMSSSSSSSMASAMXAXAXMASAMAAMAMMAXAAXAAAAAAAAAAMXMAS",
  "AXXSSMSXMMMMMSMMSAMSSMXMSMASXSMXMASXMSSMXXMASXSXXXSAMXMAMXMMMMMXSSMXAXMASXMMMSAMXSXASMMMMMSAMXXMAXXXXSASMSXSAMXXMSAMSSSMASXMSMSMSSSMSSSXASMM",
]

function main() {
  const startingLetter = "A";
  const targetWordOne = "SAM";
  const targetWordTwo = "MAS";
  let total = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] !== startingLetter) {
        continue;
      }

      const topLeft = [input[i - 1]?.[j - 1], input[i]?.[j], input[i + 1]?.[j + 1]].join("")
      const topRight = [input[i - 1]?.[j + 1], input[i]?.[j], input[i + 1]?.[j - 1]].join("")

      const topLeftValid = (topLeft === targetWordOne || topLeft === targetWordTwo);
      const topRightValid = (topRight === targetWordOne || topRight === targetWordTwo);

      if (topLeftValid && topRightValid) {
        total++;
      }
    }
  }

  return total
}
 
console.log(main())