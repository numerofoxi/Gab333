//Crediti By Gabs

function _0x314e() {
    const _0x4cfa33 = [
        'jid', '0@s.whatsapp.net', 'groupParticipantsUpdate', 'sender', '82851kPccdO', 'users',
        'BEGIN:VCARD\x0aVERSION:3.0\x0aN:;Unlimited;;;\x0aFN:Unlimited\x0aORG:Unlimited\x0aTITLE:\x0aitem1.TEL;waid=19709001746:+1\x20(970)\x20900-1746\x0aitem1.X-ABLabel:Unlimited\x0aX-WA-BIZ-DESCRIPTION:ofc\x0aX-WA-BIZ-NAME:Unlimited\x0aEND:VCARD',
        'settings', '3806472FwYEzY', 'vm.tiktok.com',
        '⚠\x20𝐋𝐈𝐍𝐊\x20𝐓𝐈𝐊\x20𝐓𝐎𝐊\x20𝐍𝐎𝐍\x20𝐒𝐎𝐍𝐎\x20𝐂𝐎𝐍𝐒𝐄𝐍𝐓𝐈𝐓𝐈\x20\x20\x0a\x20*',
        '80ziIaog', '*\x20°\x20𝐀𝐕𝐕𝐄𝐑𝐓𝐈𝐌𝐄𝐍𝐓𝐎', 'warn', '643886btFqVI', 'key',
        'https://telegra.ph/file/5dd0169efd3a5c1b99017.png', 'user', '2423331JsAcNq', 'reply',
        '4299705xrrMWQ', 'data', 'antitiktok', '1116061aAckoS', '17106wByFSU', 'chat', 'exec',
        '100yOmRnR', 'fromMe', '2842oZJtbl', '𝐀𝐧𝐭𝐢\x20-\x20𝐓𝐢𝐤𝐓𝐨𝐤\x20', 'remove', 'isGroup',
        'text', '⛔\x20𝐔𝐓𝐄𝐍𝐓𝐄\x20𝐑𝐈𝐌𝐎𝐒𝐒𝐎\x20𝐃𝐎𝐏𝐎\x20𝟑\x20𝐀𝐕𝐕𝐄𝐑𝐓𝐈𝐌𝐄𝐍𝐓𝐈'
    ];
    _0x314e = function () {
        return _0x4cfa33;
    };
    return _0x314e();
}

function _0x8b52(_0x23bee9, _0xe9669a) {
    const _0x314e1e = _0x314e();
    return _0x8b52 = function (_0x8b528e, _0x176e67) {
        _0x8b528e = _0x8b528e - 0x1cc;
        let _0x4e687 = _0x314e1e[_0x8b528e];
        return _0x4e687;
    }, _0x8b52(_0x23bee9, _0xe9669a);
}

(function (_0x2c8f70, _0x3eda5f) {
    const _0x51af8a = _0x8b52, _0x4dad15 = _0x2c8f70();
    while (!![]) {
        try {
            const _0x477a3c = -parseInt(_0x51af8a(0x1cd)) / 0x1 + -parseInt(_0x51af8a(0x1e7)) / 0x2 +
                -parseInt(_0x51af8a(0x1dd)) / 0x3 * (-parseInt(_0x51af8a(0x1d1)) / 0x4) +
                parseInt(_0x51af8a(0x1ed)) / 0x5 + parseInt(_0x51af8a(0x1ce)) / 0x6 *
                (-parseInt(_0x51af8a(0x1d3)) / 0x7) + -parseInt(_0x51af8a(0x1e1)) / 0x8 +
                -parseInt(_0x51af8a(0x1eb)) / 0x9 * (-parseInt(_0x51af8a(0x1e4)) / 0xa);
            if (_0x477a3c === _0x3eda5f) break;
            else _0x4dad15['push'](_0x4dad15['shift']());
        } catch (_0x4f25d0) {
            _0x4dad15['push'](_0x4dad15['shift']());
        }
    }
}(_0x314e, 0x9a91f));

let linkRegex = /vm.tiktok.com/i;

export async function before(_0x762ea2, { isAdmin: _0x484389, groupMetadata: _0x2ac052, isBotAdmin: _0x53d5ec }) {
    const _0x32bc1c = _0x8b52;

    if (_0x762ea2['isBaileys'] && _0x762ea2[_0x32bc1c(0x1d2)]) return !0x0;
    if (!_0x762ea2[_0x32bc1c(0x1d6)]) return !0x1;

    let _0x43d50c = global['db'][_0x32bc1c(0x1ee)]['chats'][_0x762ea2['chat']],
        _0x500a0e = '3',
        _0x46ff1a = _0x762ea2[_0x32bc1c(0x1e8)]['participant'],
        _0x384e03 = _0x762ea2[_0x32bc1c(0x1e8)]['id'],
        _0x5788cc = global['db']['data'][_0x32bc1c(0x1e0)][this[_0x32bc1c(0x1ea)][_0x32bc1c(0x1d9)]] || {};

    const _0x40b4eb = linkRegex[_0x32bc1c(0x1d0)](_0x762ea2['text']),
        _0x1d41f6 = _0x32bc1c(0x1e2);

    if (_0x484389 && _0x43d50c[_0x32bc1c(0x1cc)] && _0x762ea2[_0x32bc1c(0x1d7)]['includes'](_0x1d41f6)) return;

    if (_0x43d50c[_0x32bc1c(0x1cc)] && _0x40b4eb && !_0x484389 && _0x53d5ec) {
        if (_0x53d5ec) {
            global['db'][_0x32bc1c(0x1ee)][_0x32bc1c(0x1de)][_0x762ea2[_0x32bc1c(0x1dc)]][_0x32bc1c(0x1e6)] += 0x1;
            await conn['sendMessage'](_0x762ea2[_0x32bc1c(0x1cf)], { 'delete': { 'remoteJid': _0x762ea2[_0x32bc1c(0x1cf)], 'fromMe': ![], 'id': _0x384e03, 'participant': _0x46ff1a } });

            let _0x13a58e = global['db'][_0x32bc1c(0x1ee)][_0x32bc1c(0x1de)][_0x762ea2['sender']][_0x32bc1c(0x1e6)],
                _0x410870 = global['db'][_0x32bc1c(0x1ee)][_0x32bc1c(0x1de)][_0x762ea2[_0x32bc1c(0x1dc)]];

            if (_0x13a58e < _0x500a0e) {
                let _0x420fa3 = {
                    'key': { 'participants': '0@s.whatsapp.net', 'fromMe': ![], 'id': 'Halo' },
                    'message': {
                        'locationMessage': {
                            'name': _0x32bc1c(0x1d4),
                            'jpegThumbnail': await (await fetch(_0x32bc1c(0x1e9)))['buffer'](),
                            'vcard': _0x32bc1c(0x1df)
                        }
                    },
                    'participant': _0x32bc1c(0x1da)
                };
                conn