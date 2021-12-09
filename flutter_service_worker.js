'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8756e004ee28910caed3d91081c69b61",
"index.html": "72664299263d90e54c92df98e612f915",
"/": "72664299263d90e54c92df98e612f915",
"main.dart.js": "c975dc9dcc532efcb09162cb42208e8c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2c964fa9b3bd6c5d32b32e47414bf0ca",
"assets/AssetManifest.json": "833770bfb8e2f8a2c7e21e5b8e056f0e",
"assets/NOTICES": "def1dc3d1755f02238cfc9cdf82b0032",
"assets/FontManifest.json": "7022d346879fb09545cbf9667ca3b982",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/survey.png": "ebe4ee1cab4a2ac89ab1569b0b79c6fb",
"assets/assets/images/account_settings.png": "00b17bb56faa83318242368c29d0809f",
"assets/assets/images/splash_illustration.png": "fa28403f04f79968e5bcec7f34155303",
"assets/assets/images/ic_social_medialike.png": "be33c52da7afd65fe2db48b81e0af51a",
"assets/assets/images/ic_menu_burger.png": "7abd537c685cb2f320849b8901b4918b",
"assets/assets/images/ic_engagement.png": "acf8b02102fe3983aeae3ec6cd66e2c2",
"assets/assets/images/product_catalogue.png": "16a6fd6ee235d824f14ff1924ac0f7e1",
"assets/assets/images/ic_business_details.png": "a6609e75e5839a472ab86ebbaae9bbe2",
"assets/assets/images/dealer_blue.png": "10c3a78b2ae6cb40c382420818c65059",
"assets/assets/images/swayam_splash_new.png": "605f713d2be47801bc6c46bee87ff22d",
"assets/assets/images/dice_blue.png": "8ed2e325f58d32913717c6917d2ddfd0",
"assets/assets/images/high_five.png": "7a27a8bbf5da8e156d9d065f432017f1",
"assets/assets/images/app_icon.png": "961b4b85bcaf29824eb4b8a758713692",
"assets/assets/images/trainings.png": "f42c90bcc5afd048ff4e1aaa767daf45",
"assets/assets/images/rewards.png": "1aedaf8628ab03e2c648f45e8e8532c5",
"assets/assets/images/play_icon.jpeg": "16fa46f398b8d350ca4037f66e29558c",
"assets/assets/images/login_banner.png": "5b6e049e795bd3d46e2e641e87f63b97",
"assets/assets/images/contact_us_logo.png": "e0ee50aa31826409a3c0a570b51c9a17",
"assets/assets/images/dealer_select.png": "b88917d5d17cfe6682d2380aae46166d",
"assets/assets/images/2.0x/account_settings.png": "5239dd15bc82a7f9d96eee1fb9445b60",
"assets/assets/images/2.0x/splash_illustration.png": "d48920d92ca6dd6b55e8b025aec69729",
"assets/assets/images/2.0x/ic_social_medialike.png": "f9da8946c17298b06f7672a412d5445d",
"assets/assets/images/2.0x/ic_menu_burger.png": "4547e37664e8dd676fa79d3035dd15f8",
"assets/assets/images/2.0x/product_catalogue.png": "0f1ff590eb7f96b355012afe33baa732",
"assets/assets/images/2.0x/ic_business_details.png": "37f0b783b6f99b49a13682c58bb18d0e",
"assets/assets/images/2.0x/dealer_blue.png": "8e081d98b7d6264a416eb8733ddbba64",
"assets/assets/images/2.0x/dice_blue.png": "fe2bb5a0c787d9c19047848cfa20b8a3",
"assets/assets/images/2.0x/high_five.png": "b836d14dd9cc17ae5a89ed5d59580788",
"assets/assets/images/2.0x/rewards.png": "65812fc4fb53fa112163b961e84741ea",
"assets/assets/images/2.0x/login_banner.png": "db3f9103ba406e91e29140a26c86ae8f",
"assets/assets/images/2.0x/contact_us_logo.png": "5c2321b8bc3d7482e9724bee47b869e6",
"assets/assets/images/2.0x/dealer_select.png": "a3d5284e00ddb831c51cd2ac2d6c8d91",
"assets/assets/images/2.0x/games.png": "83a3513a2c313419ac7075936fb5cb12",
"assets/assets/images/2.0x/ic_drawer_survey.png": "ca8cff29e32b4585e6946d69a021a7d3",
"assets/assets/images/2.0x/ic_add_family_member.png": "9fa38e966b6795f6b7473b9fbadcd535",
"assets/assets/images/2.0x/library.png": "7090221facd821f18e219ea666ccea85",
"assets/assets/images/2.0x/ic_profile.png": "f7768e6b6c4cda04e624798ba231cc8f",
"assets/assets/images/2.0x/dealer_white.png": "7ed1d042dd0f723365ce0d55e321a382",
"assets/assets/images/2.0x/ic_faq.png": "3e11d449b223ac467f04d2ae388cd463",
"assets/assets/images/2.0x/engagment_banner.png": "e55d2f80be4e0171b183f6c795d44393",
"assets/assets/images/2.0x/partner_benefits.png": "fcf990436b530e4c54a0a6a3470b865f",
"assets/assets/images/2.0x/dice_white.png": "ad9033844dc7d4c47cf6453cfd24cd67",
"assets/assets/images/2.0x/storyboard.png": "794d579b6a4b25bb19cd6ac9babf24a4",
"assets/assets/images/2.0x/ic_address.png": "e221362f087fdfa69013dd05771debeb",
"assets/assets/images/2.0x/ic_drawer.png": "566b8f17c9726a897fbaea2f028d4694",
"assets/assets/images/2.0x/app_language.png": "17373ee05ca352881326feaa34265b36",
"assets/assets/images/2.0x/engagement_select.png": "d40385db3ea394a4cc3e8554d7837512",
"assets/assets/images/2.0x/splash_logo_new.png": "e43100e1657a97b320f060534d0ef613",
"assets/assets/images/2.0x/podium.png": "30fc723250e72989cd415a2bde34c586",
"assets/assets/images/2.0x/success.png": "1c0b4dcbee00e5b9f67dec6945fd91bf",
"assets/assets/images/2.0x/phone.png": "3dabe2eae8677b7def905fcf68b4f070",
"assets/assets/images/2.0x/announcement.png": "ff1fd476287c9996e21fbfd66338dc23",
"assets/assets/images/2.0x/language.png": "30a5e91a341cabc19a1d36ddd50da0f9",
"assets/assets/images/2.0x/clock.png": "e53635cb5211dcc88e8d24465994f78b",
"assets/assets/images/2.0x/ic_home_game.png": "ef305707ca7cc0616b8874740413d612",
"assets/assets/images/2.0x/content_language.png": "b5d4c2afe1b2e65a591c495a81a01ed6",
"assets/assets/images/2.0x/splash_logo_grp.png": "02a21e791fc43b7d07f61bd8fc8f4302",
"assets/assets/images/2.0x/contact_us.png": "66167ab650d03548126b8cc111bbcddc",
"assets/assets/images/2.0x/feedback.png": "3e54f003ecb6770448e4a3db9a9a7c26",
"assets/assets/images/2.0x/outline_heart.png": "476964a928f748d77847b3bbe486fed0",
"assets/assets/images/2.0x/people.png": "548b32627dd5b88cf1518e1b0fc1274f",
"assets/assets/images/games.png": "b881e9c73c4a723c4c3cc68bc6616626",
"assets/assets/images/gmae_place_holder.jpeg": "e41c8c9c219139d4e56097875f015778",
"assets/assets/images/live_sessions.png": "5d76ec9779e8a3815982f97b953d934f",
"assets/assets/images/ic_drawer_survey.png": "b86d1ee817fe36e51f474b0d2d587477",
"assets/assets/images/scorm.png": "cae3afb0524829b9dec0166df78eee07",
"assets/assets/images/ic_add_family_member.png": "bf3c93bb73816d7b8a4238780b8c799a",
"assets/assets/images/silver_medal.png": "d62a15a9a40e2abb72b9fbb00ce7760b",
"assets/assets/images/ic_profile.png": "df2b84ff098b8589ad8ba7deb280f0e4",
"assets/assets/images/3.0x/account_settings.png": "781fcf55348ede3935ea8fe8d5f20d74",
"assets/assets/images/3.0x/splash_illustration.png": "cfe87f49da72e57d876807454b63dfb1",
"assets/assets/images/3.0x/ic_social_medialike.png": "eb048b65b69ff81f4760f7b055bb1954",
"assets/assets/images/3.0x/ic_menu_burger.png": "94b0b55f8ae481df3e1509d997fe8434",
"assets/assets/images/3.0x/product_catalogue.png": "0b9f145dbd5a568597ccfabe33bbea54",
"assets/assets/images/3.0x/ic_business_details.png": "ea6fa9baef7a1ade39e8b8bd64e4002f",
"assets/assets/images/3.0x/dealer_blue.png": "560bfa4c22e03da1965b317ae7198143",
"assets/assets/images/3.0x/dice_blue.png": "324f73ecdcd18772e1240c40017a47ea",
"assets/assets/images/3.0x/high_five.png": "4bb55e822c027109bcea33f5d0ed44ad",
"assets/assets/images/3.0x/rewards.png": "2087778eb21393d96d347524e682846f",
"assets/assets/images/3.0x/login_banner.png": "103dc4bed8889e22a53142688317df90",
"assets/assets/images/3.0x/contact_us_logo.png": "c0fc3c56306a74f85316c2921efcd2b0",
"assets/assets/images/3.0x/dealer_select.png": "92bf3245b021cc082e36b3f6f3b3ca7c",
"assets/assets/images/3.0x/games.png": "8fffd6a78838e226d28ff63016cf67c5",
"assets/assets/images/3.0x/ic_drawer_survey.png": "8d455c1431596f69ad72a1d6baff0197",
"assets/assets/images/3.0x/ic_add_family_member.png": "e690a2d419822ff3789c1d5ec2bd4701",
"assets/assets/images/3.0x/library.png": "3651f8debafbce8d281266d92a2bcd04",
"assets/assets/images/3.0x/ic_profile.png": "8f34abf7c7a1cb27bc1a51703d4c2e32",
"assets/assets/images/3.0x/dealer_white.png": "8efd9496d6bb0e734ea1b035a5ec2745",
"assets/assets/images/3.0x/ic_faq.png": "d439ad96c431aed3426201fbc7a0f47a",
"assets/assets/images/3.0x/engagment_banner.png": "4996e29f614568ecfd626aed987d3610",
"assets/assets/images/3.0x/partner_benefits.png": "af4847bdba760db445fab2dae16753b7",
"assets/assets/images/3.0x/dice_white.png": "f7bb167672c356da083c1f5965770790",
"assets/assets/images/3.0x/storyboard.png": "02e70df3379588cee9eb9b2cea21410f",
"assets/assets/images/3.0x/ic_address.png": "ead2a32a2253c1aa7e4a204477c5c383",
"assets/assets/images/3.0x/ic_drawer.png": "ab0bda79f7e5eb545c3022a51d0f13c8",
"assets/assets/images/3.0x/app_language.png": "df0a7636f5217a8bdbed32db756e433c",
"assets/assets/images/3.0x/engagement_select.png": "462950f206910823164fd560e10ae77b",
"assets/assets/images/3.0x/splash_logo_new.png": "5404e7f0e75c48afa087d37fc747b8e9",
"assets/assets/images/3.0x/podium.png": "fb4cace98b2601c7c4f74588eb8cc992",
"assets/assets/images/3.0x/success.png": "b1761faa143cfe3112fda9b9fabf374d",
"assets/assets/images/3.0x/phone.png": "28e84715aaa3796e03632519382baa72",
"assets/assets/images/3.0x/announcement.png": "a4b2d55d362da60e16c6e4b3ee65ce2c",
"assets/assets/images/3.0x/language.png": "8d21d719d7e368c6e70ce2e85abfa78e",
"assets/assets/images/3.0x/clock.png": "e5283f622dffa720e94ac909f223d6ef",
"assets/assets/images/3.0x/ic_home_game.png": "f0c5883c1ec51b6ffc82e3a862adc552",
"assets/assets/images/3.0x/content_language.png": "4f18aba6c7ac4a21911846485ead5b8d",
"assets/assets/images/3.0x/splash_logo_grp.png": "1027c78e3b9c3f9fcff38c59dd539cc8",
"assets/assets/images/3.0x/contact_us.png": "7fa8d6d00eb44d9690d4c61a757d60a3",
"assets/assets/images/3.0x/feedback.png": "ae25eb4b6bd119315a002062f0f8b3e5",
"assets/assets/images/3.0x/outline_heart.png": "3aee11c15b77912f9ca8e6c9bf27173e",
"assets/assets/images/3.0x/people.png": "7475f5d0be3dc8fd90d09e89dbbbfd4a",
"assets/assets/images/announcement_1.png": "b200e3165b1f00e049306b6217edb6da",
"assets/assets/images/dealer_white.png": "dd7a6166b0cd9dbd566c9a6a4e79bb93",
"assets/assets/images/book_solid.png": "8d7248f3ee41a453e7cf39720e798534",
"assets/assets/images/notes.png": "1bacd3906c1a1147d4191a2526f0befe",
"assets/assets/images/placeholder.png": "1632e46a5c79d43f3125ca62c54189cb",
"assets/assets/images/ic_faq.png": "c57b94f73ff0dec2b16a1eedeb39a3d7",
"assets/assets/images/ic_logout.png": "8e38db12ea60946985b1d7992892b66c",
"assets/assets/images/play_icon.png": "1908080bb5efd32f9c55c3b6116831b7",
"assets/assets/images/engagment_banner.png": "5f934264949e63f9e4dfbc0eb7ea1103",
"assets/assets/images/poll_solid.png": "02eabed518fc04589fd1cb472d3c5b68",
"assets/assets/images/calculator.png": "a7cad4c2f174fe188ad3d308c7647c58",
"assets/assets/images/partner_benefits.png": "068e0ec11ea6ba04d91b423168aef36b",
"assets/assets/images/swayam_splash_logo.png": "349e7834ed55c4ad785cd0064b3bd298",
"assets/assets/images/dice_white.png": "897188a81ad4ffe068823956baefcb9c",
"assets/assets/images/storyboard.png": "a4788634b2f280bca192581a987e8373",
"assets/assets/images/ic_address.png": "3c840732f6e54118e2606c2723509f6c",
"assets/assets/images/ic_drawer.png": "eaa5c938daa7a94ba9bd778c7bfa9356",
"assets/assets/images/app_language.png": "847bd88abcc53491b33adceb589585a6",
"assets/assets/images/engagement_select.png": "fd4e03081091eab5ad97269817cf38be",
"assets/assets/images/videos.png": "f87062cae28c228ce24f42e4bd80c122",
"assets/assets/images/medal.png": "d2e7e012851b52d76ba4c70f4e15b65a",
"assets/assets/images/idea_factory.png": "52d3d5fbfd425b398766968b59bebc6a",
"assets/assets/images/splash_logo_new.png": "9f282465103dbca1ca0bfcf288c49cc2",
"assets/assets/images/podium.png": "992b033e179a2b5c166593880ec9382e",
"assets/assets/images/success.png": "bce40a4560bf12a5d3935c9b6f89a654",
"assets/assets/images/phone.png": "429d2a49ac43ff757a3e8251b3e14f7b",
"assets/assets/images/analytics.png": "02eabed518fc04589fd1cb472d3c5b68",
"assets/assets/images/clock.png": "618db3b468d9036ae67ba11c5c6cf431",
"assets/assets/images/announcement_solid.png": "b200e3165b1f00e049306b6217edb6da",
"assets/assets/images/ic_home_game.png": "c07264195b58714388f2302a3cebc001",
"assets/assets/images/content_language.png": "fd9980cd5e6ec3cbbdf26919d790f4a5",
"assets/assets/images/splash_logo_grp.png": "938228a2b7a1d5c71d43ba2d749ff69c",
"assets/assets/images/faq.png": "631f9a6477df271f0c2cc282847ba99d",
"assets/assets/images/assignment.png": "72c1413abf0f519f3d76ae006cb4ee9e",
"assets/assets/images/language_1.png": "3e7f7930464097ec29829c92de29ae0a",
"assets/assets/images/library_1.png": "8d7248f3ee41a453e7cf39720e798534",
"assets/assets/images/feedback.png": "24781eaffa7eed3419f2a3cb1cdabc83",
"assets/assets/images/notification.png": "aadcf2606a588be60413aa602c5f0138",
"assets/assets/images/ic_contact_us.png": "31b7a5d1b223d1e8bd1925a08fba355e",
"assets/assets/images/id_badge_solid.png": "6437c67e499b4fbfca0f50f985cc956b",
"assets/assets/images/outline_heart.png": "5de4bc5438990a9ae0f8e8a5fb31db71",
"assets/assets/images/contact_us2.png": "eff180e4b474981037510b07d5092a6c",
"assets/assets/images/ic_dealer.png": "79b2176881742d96ac3e0e63595fa9dc",
"assets/assets/images/people.png": "72e3af73caa2ba37b679bc70f81fe26c",
"assets/assets/terms.html": "c7b037ebaf7fea27ab95a3250a816056",
"assets/assets/fonts/Nunito-ExtraBold.ttf": "438598eadc302471a495b3133620f621",
"assets/assets/fonts/Nunito-Light.ttf": "08bc5f85e4505782d3fa279944f2feab",
"assets/assets/fonts/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/assets/fonts/Nunito-SemiBold.ttf": "876701bc4fbf6166f07f152691b15159",
"assets/assets/fonts/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/assets/policy.html": "412bf83533b02c64c70a000ec577270f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
