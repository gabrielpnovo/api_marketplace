const tabelaRoupa = [
    { id: 1, nome: 'BermudaLinho', tipo: 'verao', valor: 159.90 ,descricao: 'Bermuda em Linho sustentavel', sustentavel: 'sim', img: 'https://m.media-amazon.com/images/I/41lQiCmx6aL.AC_SY1000.jpg' },
    { id: 2, nome: 'ShortAlfaiataria', tipo: 'verao', valor: 139.90 ,descricao: 'Short em Alfaitaria', sustentavel: 'nao', img: 'https://acdn.mitiendanube.com/stores/005/081/585/products/284-00ebb4d7ce6ab2cfec17280825427261-1024-1024.png' },
    { id: 3, nome: 'CamisaLinho', tipo: 'basico', valor: 199.90 ,descricao: 'Camisa em Linho basica sustentavel', sustentavel: 'sim', img: 'https://acdn.mitiendanube.com/stores/001/122/156/products/ml-branco2-7e6a7f6d8f8b93663816384873678706-1024-1024.jpg' },
    { id: 4, nome: 'CalcaJogger', tipo: 'verao', valor: 159.90 ,descricao: 'Calca Jogger em Sarja sustentavel', sustentavel: 'sim', img: 'https://www.pngmart.com/files/1/Mens-Pant-PNG-HD.png' },
    { id: 5, nome: 'CalcaCargo', tipo: 'verao', valor: 179.90 ,descricao: 'Calca Cargo em Sarja sustentave', sustentavel: 'sim', img: 'https://dramaoriginal.com.br/wp-content/uploads/2021/02/CALCA-CARGO-BEGE-NEW-01.png' },
    { id: 6, nome: 'CalcaWide', tipo: 'verao', valor: 259.90 ,descricao: 'Calca Wideleg em Jeans sustentavel', sustentavel: 'sim', img: 'https://damyller.vteximg.com.br/arquivos/ids/631605-980-1470/Calca-Jeans-Wide-Leg-Cintura-Alta-Detalhe-Still--.jpg?v=637647309840270000' },
    { id: 7, nome: 'CalcaLinho', tipo: 'basico', valor: 299.90 ,descricao: 'Calca em linho basica sustentavel', sustentavel: 'sim', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx8lBmvIpEcpSvkGBxXBu1U51uuOCf41KwVg&s' },
    { id: 8, nome: 'CalcaAlfaiataria', tipo: 'verao', valor: 219.90 ,descricao: 'Calca em Alfaiataria', sustentavel: 'nao', img: 'https://cdn.vnda.com.br/saintstudio/2018/07/31/1875-calca-alfaiataria-feminina-preta-1665.jpg?v=1533070855' },
    { id: 9, nome: 'BermudaJeans', tipo: 'verao', valor: 159.90 ,descricao: 'Bermuda Jeans sustentavel', sustentavel: 'sim', img: 'https://img.lojasrenner.com.br/item/631200148/large/12.jpg' },
    { id: 10, nome: 'ShortJeans', tipo: 'verao', valor: 139.90 ,descricao: 'Short Jeans sustentavel', sustentavel: 'sim', img: 'https://www.kindpng.com/picc/m/283-2836839_short-jean-png-image-jeans-shorts-transparent-png.png' },
    { id: 11, nome: 'CalcaJeans', tipo: 'basico', valor: 179.90 ,descricao: 'Calca Jeans basica sustentavel', sustentavel: 'sim', img: 'https://taco.vteximg.com.br/arquivos/ids/334964-1000-1500/18564_C051_1-CALCA-JEANS-RETA-VINTAGE-INFANTIL-MASCULINO.jpg?v=636957665520600000' },
    { id: 12, nome: 'CamisaEstampada', tipo: 'verao', valor: 159.90 ,descricao: 'Camisa estampada', sustentavel: 'nao', img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/252/333/products/camisas-estilo-despojado-casual-manga-longa-use-camisas-ponto-com-511-fbb3d6bd72df34ae2a16176664540894-640-0.png' },
    { id: 13, nome: 'CamisaLisa', tipo: 'basico', valor: 129.90 ,descricao: 'Camisa Lisa basica', sustentavel: 'nao', img: 'https://cdn.shopify.com/s/files/1/0071/1013/1775/products/OstraBrasil362_1024x1024@2x.png?v=1641315452' },
    { id: 14, nome: 'BlusaSm', tipo: 'verao', valor: 119.90 ,descricao: 'Blusa sem manga', sustentavel: 'nao', img: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/roupa-para-menina/blusa-teen/blusa-cropped-sem-manga-laranja_598031_600_1.jpg' },
    { id: 15, nome: 'BlusaMc', tipo: 'verao', valor: 139.90 ,descricao: 'Blusa manga curta', sustentavel: 'nao', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA28E229iyc6wexET6CYb-cu1kzoKRef7btA&s' },
    { id: 16, nome: 'CalcaMoletomJogger', tipo: 'inverno', valor: 179.90 ,descricao: 'Calca em moletom Jogger', sustentavel: 'nao', img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/153/835/products/lojadaruiva-21-a6fb1002d92df7a6df16445244170662-1024-1024.png' },
    { id: 17, nome: 'CalcaMoletomCargo', tipo: 'inverno', valor: 179.90 ,descricao: 'Calca em moletom cargo', sustentavel: 'nao', img: 'https://cea.vtexassets.com/arquivos/ids/14655911-1600-auto?v=637290625589570000&width=1600&height=auto&aspect=true' },
    { id: 18, nome: 'CalcaMoletomWide', tipo: 'inverno', valor: 199.90 ,descricao: 'Calca em moletom Wideleg', sustentavel: 'nao', img: 'https://cdn.shopify.com/s/files/1/0602/2466/7812/products/Ha7fd42d24b5045758bb7e0b99d6bad473_720x.jpg?v=1642446288' },
    { id: 19, nome: 'MoletomMl', tipo: 'inverno', valor: 179.90 ,descricao: 'Moletom manga longa', sustentavel: 'nao', img: 'https://static.netshoes.com.br/produtos/blusa-de-moletom-flanelado-com-capuz-bolso-canguru/10/7IO-0004-010/7IO-0004-010_zoom1.jpg?ts=1653852034&ims=544x' },
    { id: 20, nome: 'JaquetaJeans', tipo: 'basico', valor: 219.90 ,descricao: 'Jaqueta Jeans basica sustentavel', sustentavel: 'sim', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIrVVHLJDUj1KGEh725MSDmwh2emA-zaoIA&s' },
    { id: 21, nome: 'JaquetaPu', tipo: 'inverno', valor: 299.90 ,descricao: 'Jaqueta em PU', sustentavel: 'nao', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_710348-MLB31362542767_072019-F.webp' },
    { id: 22, nome: 'JaquetaParka', tipo: 'inverno', valor: 359.90 ,descricao: 'Jaqueta Parka', sustentavel: 'nao', img: 'https://m.media-amazon.com/images/I/71GhSmtjBwL._AC_SY741_.jpg' },
    { id: 23, nome: 'JaquetaPuffer', tipo: 'inverno', valor: 319.90 ,descricao: 'Jaqueta Puffer', sustentavel: 'nao', img: 'https://cdn.shopify.com/s/files/1/1505/8214/products/JAQUETAPRETASEMCAPUZ_2_1100x.png?v=1625319299' },
    { id: 24, nome: 'CamisaFlanela', tipo: 'inverno', valor: 159.90 ,descricao: 'Camisa em Flanela', sustentavel: 'nao', img: 'https://m.media-amazon.com/images/I/71vA5HXUXWL._AC_SX385_.jpg' },
    { id: 25, nome: 'CasacoLongo', tipo: 'inverno', valor: 259.90 ,descricao: 'Casaco Longo', sustentavel: 'nao', img: 'https://cdn-images.farfetch-contents.com/15/13/44/74/15134474_26511293_1000.jpg' },
    { id: 26, nome: 'CasacoBlazer', tipo: 'inverno', valor: 279.90 ,descricao: 'Blazer em Alfaiataria', sustentavel: 'nao', img: 'https://damyller.vteximg.com.br/arquivos/ids/677479-980-1470/Blazer-em-Sarja-Masculino-Detalhe-Still--.jpg?v=637872944063830000' },
    { id: 27, nome: 'BlusaoLa', tipo: 'inverno', valor: 179.90 ,descricao: 'Blusao de Retilinea em La', sustentavel: 'nao', img: 'https://img102.urbanic.com/goods-pic/26f2dd81487c4c8fbfdb99ff8055d08b_w1176_q95' },
    { id: 28, nome: 'BlusaGolaAlta', tipo: 'inverno', valor: 139.90 ,descricao: 'Blusa em Gola Alta', sustentavel: 'nao', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8C69_QgbSrGesREw_PKQGpXADxFO1TJr19g&s' },
    { id: 29, nome: 'BlusaMl', tipo: 'inverno', valor: 139.90 ,descricao: 'Blusa Manga Longa', sustentavel: 'nao', img: 'https://cdn.shopify.com/s/files/1/1505/8214/products/14_3_1100x.jpg?v=1594930947' },
    { id: 30, nome: 'BlusaoEtinico', tipo: 'inverno', valor: 179.90 ,descricao: 'Blusao de Retilinia Etinico', sustentavel: 'nao', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_961799-CBT46460919493_062021-F.webp' },
    { id: 31, nome: 'CamisetaMc', tipo: 'basico', valor: 59.90 , descricao: 'Camiseta Manga Curta basisa sustentavel',sustentavel: 'sim', img: 'https://lojasbesni.vteximg.com.br/arquivos/ids/393403-1500-2000/629766005-camiseta-manga-curta-basica-masculina-botoes-marinho-p-c0f.jpg?v=637949848427630000' },
    { id: 32, nome: 'CamisetaMl', tipo: 'basico', valor: 79.90 , descricao: 'Camiseta Manga Longa basica sustentavel',sustentavel: 'sim', img: 'https://images.tcdn.com.br/img/img_prod/661009/camiseta_manga_longa_dry_fit_uv50_new_brand_657_1_913e68af77a603d2370773d5abcc3149.png' },
    { id: 33, nome: 'CamisetaCropped', tipo: 'basico', valor: 59.90 , descricao: 'Camiseta Cropped basica sustentavel',sustentavel: 'sim', img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/138/216/products/52973_still_c04_s11-105ce51a30f7f80d8a16587757176066-1024-1024.jpg' },
]

let id = 1
if (tabelaRoupa.length != 0) {
    id = Math.max.apply(null, tabelaRoupa.map(e => e.id)) + 1
}

export {tabelaRoupa, id}