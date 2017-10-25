(function($, window) {
    $(document).ready(function () {
        $.getJSON('assets/lojas.json', function (data) {
            var items = [];
            var options = '<option value="">Selecione uma Cidade</option>';
            $.each(data, function (key, val) {
                options += '<option value="' + val.cidades + '">' + val.cidades + '</option>';
            });
            $("#cidades").html(options);
            $("#cidades").change(function () {
                var options_lojas = '';
                var str = "";
                $("#cidades option:selected").each(function () {
                    str += $(this).text();
                });
                $.each(data, function (key, val) {
                    if(val.cidades == str) {
                        $.each(val.lojas, function (key_lojas, val_lojas) {
                            options_lojas += '<option id="loja" value="' + val_lojas + '">' + val_lojas + '</option>';
                        });
                    }
                });
                $("#lojas").html(options_lojas);
            }).change();
        });
    });

    jQuery(document).ready(function(){
        jQuery('#pesquisa_loja').submit(function(){
            jQuery.ajax({
                success: function(data) {
                    var loja = jQuery('#lojas').val();

                    if (loja == 'Comprebem - Cidade da Esperança') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.239287531408!2d-35.238389284847!3d-5.821841759026941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2556ab7c3a7ff%3A0x63ad37722e7efd3!2sRedeMAIS+Comprebem!5e0!3m2!1spt-BR!2sbr!4v1508946263656";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'Comprebem - São José') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.429040293253!2d-35.23868668484527!3d-6.072736461281744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b25fea0608d6e9%3A0xcdd2e9a94d7e3fe4!2sR.+Bonfim%2C+35+-+Fonte+da+Bica%2C+S%C3%A3o+Jos%C3%A9+de+Mipibu+-+RN%2C+59162-000!5e0!3m2!1spt-BR!2sbr!4v1508946498489";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'Serve Bem - Felipe Camarão') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63502.56848727364!2d-35.28353940925921!3d-5.868200829193785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2551c4cfaa34b%3A0xbc877755a2590a4d!2sSupermercado+RedeMAIS+Felipe+Camar%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1508946573128";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'Daterra') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.4253185180387!2d-35.21796922717521!3d-5.795445224786555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3aaa7e5b3c32d%3A0x77993f392b8cf8bb!2sRede+Mais!5e0!3m2!1spt-BR!2sbr!4v1508946631814";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'Serve Bem - Cidade da Esperança') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.204714829108!2d-35.240027784846916!3d-5.8267342590699345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b25513324fe16d%3A0x8c2456c1feaf7702!2sSupermercado+Rede+Mais+Serve+Bem!5e0!3m2!1spt-BR!2sbr!4v1508946713582";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'Tampinha') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.3016302469687!2d-35.23687418484694!3d-5.813009058949453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b25547c928588d%3A0xb763b01f5580d46f!2sSupermercado+Tampinha!5e0!3m2!1spt-BR!2sbr!4v1508946762534";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'Pajuçara') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.878451230897!2d-35.250794484847624!3d-5.730641758232765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3a987e2fbcca7%3A0x885c1df6584b87d0!2sRedeMais+Paju%C3%A7ara!5e0!3m2!1spt-BR!2sbr!4v1508946807015";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'Veneza') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.2185636372506!2d-35.202263584847024!3d-5.824774959052685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ffeb8a9cb2ef%3A0xde9acca7cdd15ca!2sRede+Mais+Veneza!5e0!3m2!1spt-BR!2sbr!4v1508946848258";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'Serve Bem - Planalto') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15876.44076428866!2d-35.25376676690072!3d-5.840089785903766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b255b668ea91d3%3A0x295faaa7d6097deb!2sSupermercado+RedeMAIS+Planalto!5e0!3m2!1spt-BR!2sbr!4v1508946896625";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'Opção') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.256484637447!2d-35.42279294185097!3d-5.6386507297459945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3ba861df89703%3A0xdd9385f7412acad1!2zU3VwZXJtZXJjYWRvIE9ww6fDo28!5e0!3m2!1spt-BR!2sbr!4v1508947139532";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'RedeMais Opção 2 - Ceará Mirim') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.26338593785!2d-35.42496844188328!3d-5.6366330297369895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3ba8e25475719%3A0x3960a49094cb7cbd!2sR.+Dr.+Rodolfo+Garc%C3%ADa%2C+11%2C+Cear%C3%A1-Mirim+-+RN%2C+59570-000!5e0!3m2!1spt-BR!2sbr!4v1508947313577";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'J. Araújo') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.861819030455!2d-36.79305173484237!3d-6.411793964491912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7afc565b8b3e9f5%3A0x431b988d5b18c358!2sRede+Mais+J.Ara%C3%BAjo!5e0!3m2!1spt-BR!2sbr!4v1508947356202";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'Venâncio') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.071090452764!2d-36.52644958484364!3d-6.254364562978098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b1d5dfaf245a01%3A0x648ef00c0ad868b5!2sSupermercado+RedeMAIS+Ven%C3%A2ncio!5e0!3m2!1spt-BR!2sbr!4v1508947464134";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'Comprebem - João Câmara/RN') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.2016254617415!2d-35.818514634849066!3d-5.537087356592213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3dc16206d30fb%3A0x6574b8f0b7d2ad48!2sRedeMAIS+Comprebem+-+Jo%C3%A3o+C%C3%A2mara!5e0!3m2!1spt-BR!2sbr!4v1508947558774";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'Comprebem - Macau/RN') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.9209343895313!2d-36.635105584852006!3d-5.116444153237637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b72af512ca2743%3A0x629b115869a08b68!2sRedeMAIS+Comprebem+-+Macau!5e0!3m2!1spt-BR!2sbr!4v1508947590736";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'Nova Cruz') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1595505472733!2d-35.44141868484158!3d-6.5014766653723886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ad91d42ff45f03%3A0xa9601104bca7dfb3!2sSupermercado+RedeMAIS+Nova+Cruz!5e0!3m2!1spt-BR!2sbr!4v1508947630233";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'Serve Bem - Parnamirim') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.578010707379!2d-35.26302788484634!3d-5.914722159849704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2570bee34ef97%3A0x8b798f39c324fb0e!2sSupermercado+Rede+Mais!5e0!3m2!1spt-BR!2sbr!4v1508947663915";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'Rosa dos Ventos - Parnamirim') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.5098061414683!2d-35.277653784846194!3d-5.924219359934612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b25714ab253c9d%3A0x8a92928d6cb5b2c1!2sRede+Mais+Rosa+dos+Ventos!5e0!3m2!1spt-BR!2sbr!4v1508947796333";
                        $('#mapa').attr('src', localizacao);
                    } else if (loja == 'Santa Cruz') {
                        var localizacao = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.296143103489!2d-36.0228837848438!3d-6.22462836269667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b1fbea52e352dd%3A0xd5b479284e8f27e0!2sAv.+Trair%C3%AD%2C+130%2C+Santa+Cruz+-+RN%2C+59200-000!5e0!3m2!1spt-BR!2sbr!4v1508947896404";
                        $('#mapa').attr('src', localizacao);
                    }
                }
            });
            return false;
        });
    });
})(jQuery, window);