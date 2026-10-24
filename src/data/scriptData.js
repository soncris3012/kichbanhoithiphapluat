export const CHARACTERS = [
  {
    id: 'son',
    name: 'Thái Sơn',
    role: 'Chiến sĩ',
    avatar: 'S',
    tagClass: 'char-son',
    borderColor: '#3b82f6',
    tagBg: '#dbeafe',
    tagText: '#1d4ed8',
    desc: 'Chiến sĩ năm thứ 2, "đầu sỏ" khởi xướng vụ trốn trại, tự tin quá đà, thích rủ rê xõa lướt.'
  },
  {
    id: 'cuong',
    name: 'Cường',
    role: 'Chiến sĩ',
    avatar: 'C',
    tagClass: 'char-cuong',
    borderColor: '#22c55e',
    tagBg: '#dcfce7',
    tagText: '#15803d',
    desc: 'Chiến sĩ, tính nhát gan, hay sợ sệt nhưng rất thích nói đạo lý; khi xảy ra chuyện thì mếu máo.'
  },
  {
    id: 'dung',
    name: 'Dũng',
    role: 'Chiến sĩ',
    avatar: 'D',
    tagClass: 'char-dung',
    borderColor: '#f97316',
    tagBg: '#ffedd5',
    tagText: '#c2410c',
    desc: 'Chiến sĩ, "ma men" chính hiệu, uống vào là sừng sộ, háo thắng, tự nhận "chúa tể tốc độ".'
  },
  {
    id: 'nhung',
    name: 'Quỳnh Trang (Chị Nhung)',
    role: 'Chủ quán',
    avatar: 'N',
    tagClass: 'char-nhung',
    borderColor: '#ec4899',
    tagBg: '#fce7f3',
    tagText: '#be185d',
    desc: 'Chủ quán rượu ngoài cổng, xởi lởi, khéo mồm, hám lợi nhưng sợ rắc rối liên lụy.'
  },
  {
    id: 'taibua',
    name: 'Tài Búa',
    role: 'Thanh niên xã',
    avatar: 'T',
    tagClass: 'char-taibua',
    borderColor: '#ef4444',
    tagBg: '#fee2e2',
    tagText: '#b91c1c',
    desc: 'Thanh niên địa phương, boy xăm trổ mê tốc độ, tính nóng nảy nhưng biết kính nể chỉ huy đúng mực.'
  },
  {
    id: 'linh',
    name: 'Linh',
    role: 'Bạn gái',
    avatar: 'L',
    tagClass: 'char-linh',
    borderColor: '#a855f7',
    tagBg: '#f3e8ff',
    tagText: '#7e22ce',
    desc: 'Bạn gái Tài Búa, điệu đà, chảnh chảnh, luôn lo cho "mặt mũi lụa là" và thích dọa báo công an.'
  },
  {
    id: 'lan',
    name: 'Lan',
    role: 'Đoàn xã',
    avatar: 'L',
    tagClass: 'char-lan',
    borderColor: '#06b6d4',
    tagBg: '#cffafe',
    tagText: '#0e7490',
    desc: 'Cán bộ Đoàn xã kết nghĩa với Trung đoàn, thông minh, nhanh trí, dứt khoát và có trách nhiệm.'
  },
  {
    id: 'lai',
    name: 'Thượng úy Lai',
    role: 'Đại đội trưởng',
    avatar: 'L',
    tagClass: 'char-lai',
    borderColor: '#eab308',
    tagBg: '#fef08a',
    tagText: '#854d0e',
    desc: 'Đại đội trưởng nghiêm khắc, tác phong chuẩn mực, biết điều với nhân dân, thương chiến sĩ nhưng nghiêm kỷ luật.'
  },
  {
    id: 'an',
    name: 'An',
    role: 'Vệ binh',
    avatar: 'A',
    tagClass: 'char-an',
    borderColor: '#64748b',
    tagBg: '#e2e8f0',
    tagText: '#334155',
    desc: 'Chiến sĩ đi cùng Đại đội trưởng, chuẩn mực, nhanh nhẹn, ghi biên bản vi phạm kỷ luật.'
  }
];

export const SCENES = [
  {
    id: 'canh-1',
    number: 'CẢNH 1',
    title: 'LÉN VƯỢT TƯỜNG RA NGOÀI DOANH TRẠI',
    meta: 'Chiều tối • Khu vực tường rào doanh trại',
    items: [
      {
        type: 'stage-dir',
        content: 'Sân khấu: Sơn, Cường, Dũng đi rón rén, liên tục ngó trước nhìn sau, vẻ mặt lấm lét như điệp viên hành động.'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '(Hạ giọng, thì thầm đầy kích động)',
        text: 'Các đồng chí, mục tiêu tối nay: Quán Chị Nhung!'
      },
      {
        type: 'dialogue',
        character: 'cuong',
        speaker: 'Cường',
        actionNote: '',
        text: 'Tôi thấy kế hoạch này hơi nguy hiểm… Lỡ bị phát hiện thì sao? Kỷ luật sắt của đơn vị chứ đâu phải đùa!'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '',
        text: 'Yên tâm! Giờ này cán bộ đang họp giao ban. Kế hoạch này tôi tính toán kỹ đến từng cen-ti-mét rồi!'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '',
        text: 'Đến tường rào đơn vị rồi. Giờ ai leo trước?'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '(Ưỡn ngực, vỗ ngực tự đắc)',
        text: 'Tôi! Đặc công Dũng xuất trận!'
      },
      {
        type: 'stage-dir',
        content: 'Dũng lấy đà trèo lên tường rào nhưng vừa bám vào gờ tường đã trượt chân ngã "BỊCH" một phát ê ẩm.',
        sfx: 'BỊCH'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '(Xoa mông nhăn nhó)',
        text: 'Ái da! Đau điếng cả người!'
      },
      {
        type: 'stage-dir',
        content: 'Cả nhóm bịt miệng cười khúc khích nhưng không giấu nổi tiếng cười lớn.'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '',
        text: 'Không nói nhiều! Hỗ trợ tôi coi nào!'
      },
      {
        type: 'stage-dir',
        content: 'Cả nhóm hè nhau đẩy kéo, người bồng người đỡ, luống cuống loạng choạng vượt qua tường rào.'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '',
        text: 'Ok Anh em! Đã vượt rào thành công an toàn!'
      },
      {
        type: 'dialogue',
        character: 'cuong',
        speaker: 'Cường',
        actionNote: '(Vừa phủi bụi trên quần áo vừa hăm hở)',
        text: 'Mục tiêu phía trước: Quán Chị Nhung thẳng tiến!'
      },
      {
        type: 'stage-dir',
        content: 'Cả nhóm hớn hở chuồn nhanh khỏi sân khấu.'
      }
    ]
  },
  {
    id: 'canh-2',
    number: 'CẢNH 2',
    title: 'QUÁN CHỊ NHUNG',
    meta: 'Đêm • Trong quán rượu bình dân',
    items: [
      {
        type: 'stage-dir',
        content: 'Sân khấu: Bố trí một bộ bàn ghế nhựa đỏ, thực đơn treo tường. Sơn, Cường, Dũng hớn hở bước vào quán.'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '(Vừa bước vào vừa nghêu ngao hát)',
        text: '“Cuộc đời vẫn đẹp sao, tình yêu vẫn đẹp sao…” Chúng em chào Chị Nhung chủ quán xinh đẹp!'
      },
      {
        type: 'dialogue',
        character: 'nhung',
        speaker: 'Chị Nhung',
        actionNote: '(Từ trong buồng đi ra, cầm giẻ vội vàng lau bàn)',
        text: 'Ai gọi đấy? Ơ, mấy chú bộ đội đẹp trai hôm nay lại ghé quán chị à?'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '',
        text: 'Chị Nhung ơi, nghe danh chị lâu rồi, hôm nay gặp ngoài đời còn trẻ đẹp hơn cả lời đồn!'
      },
      {
        type: 'dialogue',
        character: 'nhung',
        speaker: 'Chị Nhung',
        actionNote: '(Cười tít mắt nhưng liền chấn chỉnh)',
        text: 'Thôi đi chú! Miệng ngọt như mía lùi thế này chắc lại xin khuyến mãi đây mà! Nói trước nhé, quán chị buôn bán nhỏ, tuyệt đối không cho nợ đâu đấy!'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '',
        text: 'Chị yên tâm! Chúng em ăn uống văn minh, tiền tươi thóc thật. Không có chuyện nợ nần đâu!'
      },
      {
        type: 'stage-dir',
        content: 'Cả nhóm kéo ghế ngồi xuống bàn.'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '',
        text: 'Thôi Chị Nhung ơi, lên món nhanh đi, hôm nay anh em quyết tâm… xõa tới bến!'
      },
      {
        type: 'dialogue',
        character: 'nhung',
        speaker: 'Chị Nhung',
        actionNote: '(Vừa bê khay đồ nhắm ra vừa đon đả)',
        text: 'Đây, đây… Rượu mồi thơm ngon chuẩn vị của các thượng đế đây.'
      },
      {
        type: 'stage-dir',
        content: 'Chị Nhung đặt chai rượu, cốc chén, đĩa mồi thịt gà, thịt nướng thơm lừng ra bàn.'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '(Rót một ly, ngửa cổ uống cạn rồi khà một tiếng khoái chí)',
        text: 'Rượu Chị Nhung nấu có khác, uống đến đâu là biết đến đó liền á!'
      },
      {
        type: 'dialogue',
        character: 'cuong',
        speaker: 'Cường',
        actionNote: '(Nhìn quanh quất lo lắng, giật áo Sơn)',
        text: 'Nhỏ nhỏ cái mồm thôi ông tướng! Trốn ra ngoài doanh trại mà ông làm như đi trẩy hội vậy. Đại đội trưởng mà biết thì tiêu một đời hoa, nát ba đời cỏ đấy!'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '(Mặt đỏ gay, mắt hoa lên vì ngà ngà say)',
        text: 'Sợ... sợ cái gì! Đại đội trưởng giờ này đang ôm cả mớ sổ sách kế hoạch tuần kia kìa, thời gian đâu mà đi tuần tra. Lâu lâu mới "vượt biên" thành công, phải xõa chứ! Tới bến đi chú em! Chị Nhung ơi, cho thêm cút nữa!'
      },
      {
        type: 'dialogue',
        character: 'nhung',
        speaker: 'Chị Nhung',
        actionNote: '(Cầm chai rượu chạy ra, cười toe toét)',
        text: 'Có ngay, có ngay mấy chú bộ đội đẹp trai! Ăn vụng thì phải biết chùi mép, uống nhanh nhanh rồi về kẻo đơn vị điểm danh quân số nhé. Nhà bao việc!'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '',
        text: 'Chị không phải lo đâu, bọn em tính cả rồi. Nào anh em mình cùng nâng ly cho kế hoạch thành công rực rỡ cái nào!'
      },
      {
        type: 'dialogue',
        character: 'group',
        speaker: 'Cả nhóm',
        actionNote: '(Nâng ly, chụm tay vào giữa hét lớn)',
        text: '1... 2... 3... Dzô! Hôm nay... Quá Vui!'
      },
      {
        type: 'stage-dir',
        content: 'Cụng ly chan chát, uống cạn rồi cùng nhau xuýt xoa khoái trá.'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '',
        text: 'Ăn uống no say rồi, giờ bọn mình tính tăng hai karaoke chút nhỉ? Tôi ra đây thuê cái xe máy ba anh em mình lượn một vòng!'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '',
        text: 'Anh em yên tâm, tay lái tôi cừ khôi nhất vùng! Một xe kẹp ba, tôi đèo Cường với Dũng!'
      },
      {
        type: 'dialogue',
        character: 'cuong',
        speaker: 'Cường',
        actionNote: '',
        text: 'Đi xe kẹp ba á? Đã uống rượu lại còn kẹp ba không mũ, gặp cảnh sát cơ động tuần tra là ăn cám cả lũ đấy!'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '(Đập bàn rầm một cái)',
        text: 'Cơ động nào tầm này! Đi! Lên xe! Đêm nay ta là chúa tể tốc độ!'
      },
      {
        type: 'stage-dir',
        content: 'Sơn chạy vào cánh gà lấy mô hình đầu xe máy ra sân khấu chuẩn bị lên đường.'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '',
        text: 'Anh em lên xe bám chắc! Let’s Go…!'
      }
    ]
  },
  {
    id: 'canh-3',
    number: 'CẢNH 3',
    title: 'TRÊN ĐƯỜNG GIAO THÔNG',
    meta: 'Đêm khuya • Tuyến đường liên xã',
    items: [
      {
        type: 'stage-dir',
        content: 'Sân khấu: Tiếng động cơ xe máy rồ ga "Bành bành... bành bành...". Sơn, Cường, Dũng ôm dính lấy nhau trên chiếc xe máy kẹp ba chao đảo. Dũng ngồi sau nghêu ngao. Phía ngược lại, Tài Búa đang đèo bạn gái Linh bằng chiếc xe máy độ pô.',
        sfx: 'BÀNH BÀNH'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '(Gào to giữa gió)',
        text: '“Đời mình là một khúc quân hành... đời mình là bài ca chiến sĩ... ái chà chà sướng quá...”'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '(Lảo đảo hai tay lái, uốn lượn hình con rắn)',
        text: 'Ê ê, anh em xem trình đung đưa đánh võng lả lướt của tôi nha…'
      },
      {
        type: 'dialogue',
        character: 'taibua',
        speaker: 'Tài Búa',
        actionNote: '(Ngoái lại nói với Linh)',
        text: 'Nay đường vắng hoe, để anh thể hiện tuyệt chiêu bốc đầu đi xe một bánh cho em lác mắt nhé cưng!'
      },
      {
        type: 'stage-dir',
        content: 'Hai bên va chạm: RẦM!!! ẦM ẦM!!! Hai xe cùng đổ, cả bọn ngã dúi dụi, lăn lộn ra sân khấu.',
        sfx: 'ẦM ẦM'
      },
      {
        type: 'dialogue',
        character: 'linh',
        speaker: 'Linh',
        actionNote: '(Hét toáng lên, xoa mặt nắn tay chân)',
        text: 'Ối giời ôi là giời ơi! Mặt mũi lụa là, làn da ngọc ngà của tôi! Tài Búa ơi là Tài Búa, cái bọn mù dở này nó đâm vào xe mình kìa!'
      },
      {
        type: 'dialogue',
        character: 'taibua',
        speaker: 'Tài Búa',
        actionNote: '(Bật dậy như lò xo, xắn tay áo hùng hổ)',
        text: 'Tiên sư cái bọn này! Mắt mũi chúng mày sinh ra cho đủ bộ phận trên mặt hả? Đường này là đường của mỗi nhà các bố chúng mày mua à? Đi xe kiểu quái gì mà kẹp ba, lạng lách đánh võng thế kia? Có biết con xe này anh mới độ pô, độ phuộc mất mấy củ khoai không?!'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '(Lồm cồm bò dậy, nấc một cái)',
        text: 'Ơ cái anh này nói buồn cười thật! Đường này của Nhà nước chứ đường nhà anh mua chắc? Tôi đang đi đúng... đúng quỹ đạo hình SIN chuẩn toán học của tôi nhé!'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '(Sừng sộ, ngón tay chỉ thẳng mặt Tài Búa)',
        text: 'Thằng kia... mày bảo ai không có mắt? Mày có biết bọn tao là... là ai ở cái xứ này không?'
      },
      {
        type: 'dialogue',
        character: 'cuong',
        speaker: 'Cường',
        actionNote: '(Hốt hoảng, túm chặt vạt áo Dũng lôi lại)',
        text: 'Suỵt! Bé cái mồm thôi! Đừng có dại dột mà khai mình là bộ đội! Mất mặt quân đội, nhục nhã lắm ông Dũng ơi!'
      },
      {
        type: 'dialogue',
        character: 'taibua',
        speaker: 'Tài Búa',
        actionNote: '(Soi kỹ mái đầu húi cua ba phân)',
        text: 'À, nhìn cái đầu tóc ba phân là tao biết ngay mấy ông lính trốn trại rồi nhé! Bộ đội Cụ Hồ mà đi đứng lưu manh thế à? Rượu say bét nhè nồng nặc ra kia! Hôm nay không móc tiền đền con xe này thì đừng hòng bước chân về lại doanh trại!'
      },
      {
        type: 'dialogue',
        character: 'linh',
        speaker: 'Linh',
        actionNote: '',
        text: 'Đúng đấy! Đồ mấy ông say xỉn, tính ỷ đông bắt nạt dân lành lương thiện hả? Tôi móc điện thoại gọi Công an xã và Vệ binh quân khu bây giờ!'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '(Rượu bốc lên ngùn ngụt, xông tới)',
        text: 'Thách đấy! Gọi đi! Có gan thì nhào vô xem ai sợ ai!'
      },
      {
        type: 'stage-dir',
        content: 'Hai bên lao vào giằng co, xô đẩy quyết liệt. Cường sợ hãi dang hai tay can ngăn nhưng vô vọng. Sơn và Tài Búa túm chặt cổ áo nhau sẵn sàng thượng cẳng chân hạ cẳng tay.'
      }
    ]
  },
  {
    id: 'canh-4',
    number: 'CẢNH 4',
    title: 'CỨU TINH XUẤT HIỆN',
    meta: 'Ngã ba đường gần quán Chị Nhung',
    items: [
      {
        type: 'stage-dir',
        content: 'Sân khấu: Lan (mặc áo xanh thanh niên tình nguyện) đi xe đạp ngang qua, thấy đám đông cự cãi xô xát liền vội vã chống xe chạy lại can ngăn.'
      },
      {
        type: 'dialogue',
        character: 'lan',
        speaker: 'Lan',
        actionNote: '',
        text: 'Ơ kìa, có chuyện gì thế? Dừng tay lại mau các anh ơi! (Nhìn kỹ mặt ba chiến sĩ) Ủa... anh Sơn, anh Dũng bên đơn vị kết nghĩa Trung đoàn đúng không? Trời đất ơi, sao lại ra nông nỗi này?!'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '(Giật thót mình, rượu bay đi một nửa)',
        text: 'Ơ... Lan... Lan bên Đoàn thanh niên xã kết nghĩa đấy à? Thôi chết tôi rồi...'
      },
      {
        type: 'dialogue',
        character: 'taibua',
        speaker: 'Tài Búa',
        actionNote: '',
        text: 'Lan ơi, em quen mấy ông này à? Mấy ông này uống say khướt rồi tông thẳng vào xe anh, xe hỏng người đau mà còn định giở thói côn đồ đánh người này!'
      },
      {
        type: 'dialogue',
        character: 'lan',
        speaker: 'Lan',
        actionNote: '(Ngửi thấy mùi rượu nồng nặc, lắc đầu nghiêm khắc)',
        text: 'Các anh to gan bằng trời rồi! Trốn đơn vị đi uống rượu bia, điều khiển xe máy kẹp ba gây tai nạn giao thông, giờ lại còn đôi co gây gổ làm mất an ninh trật tự!'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '(Vẫn cố chấp cãi chày cãi cối)',
        text: 'Nó... nó chửi bọn anh trước, lại còn đòi tiền vô lý...'
      },
      {
        type: 'dialogue',
        character: 'lan',
        speaker: 'Lan',
        actionNote: '',
        text: 'Các anh im lặng ngay! Giờ em không đôi co với người say nữa. Chuyện này vượt quá giới hạn rồi, em phải gọi điện báo cáo trực tiếp cho chỉ huy đơn vị các anh đến xử lý!'
      },
      {
        type: 'stage-dir',
        content: 'Lan quả quyết rút điện thoại thông minh ra bấm số gọi ngay.'
      },
      {
        type: 'dialogue',
        character: 'cuong',
        speaker: 'Cường',
        actionNote: '(Mếu máo, hai tay bưng mặt ngửa lên trời)',
        text: 'Thôi xong đời rồi... Quả này về đơn vị thì có nước đi chăn kiến cả tháng các ông ơi...'
      },
      {
        type: 'dialogue',
        character: 'lan',
        speaker: 'Lan',
        actionNote: '(Nói dõng dạc vào điện thoại)',
        text: 'Alo, dạ em báo cáo Thượng úy Lai ạ! Em là Lan bên Đoàn xã kết nghĩa đây anh. Hiện tại ở khu vực ngã ba gần quán Chị Nhung, có 3 chiến sĩ đơn vị mình gặp sự cố va chạm giao thông, đang có biểu hiện say rượu và mất an ninh trật tự ạ... Dạ, dạ vâng, em đứng giữ hiện trường đợi anh ạ!'
      },
      {
        type: 'dialogue',
        character: 'group',
        speaker: 'Sơn, Cường, Dũng',
        actionNote: '(Đồng thanh hét lên, mặt cắt không còn một giọt máu)',
        text: 'Đại... Đại đội trưởng Lai thật á?!'
      }
    ]
  },
  {
    id: 'canh-5',
    number: 'CẢNH 5',
    title: 'SỰ NGHIÊM MINH VÀ BÀI HỌC',
    meta: 'Hiện trường & Giải quyết sự việc',
    items: [
      {
        type: 'stage-dir',
        content: 'Chỉ 30 giây sau, tiếng còi chỉ huy vang dội: "Tuýt! Tuýt!" Thượng úy Lai trong bộ quân phục chỉnh tề, sắc mặt nghiêm nghị bước ra cùng chiến sĩ An mang sổ ghi chép.',
        sfx: 'TUÝT TUÝT'
      },
      {
        type: 'dialogue',
        character: 'an',
        speaker: 'An',
        actionNote: '(Tiến lên trước, chỉ tay)',
        text: 'Báo cáo Đại đội trưởng, đúng là ba đồng chí Sơn, Cường, Dũng đây ạ!'
      },
      {
        type: 'dialogue',
        character: 'group',
        speaker: 'Sơn, Cường, Dũng',
        actionNote: '(Phản xạ quân sự bật lên tức thì, đứng thẳng tắp, giơ tay chào điều lệnh dù áo quần còn xộc xệch)',
        text: 'Báo cáo Đại đội trưởng!'
      },
      {
        type: 'dialogue',
        character: 'lai',
        speaker: 'Thượng úy Lai',
        actionNote: '(Đưa mắt nhìn lướt qua một lượt từ đầu đến chân)',
        text: 'Nghiêm chỉnh gớm nhỉ! Các đồng chí giỏi lắm! Tiệc rượu bên quán Chị Nhung có ngon không? Xe máy kẹp ba vít ga lạng lách có mượt mà không?!'
      },
      {
        type: 'stage-dir',
        content: 'Ba chiến sĩ cúi gằm mặt xuống đất, chân tay run lẩy bẩy không dám thốt nên lời.'
      },
      {
        type: 'dialogue',
        character: 'lai',
        speaker: 'Thượng úy Lai',
        actionNote: '(Quay sang phía Tài Búa và Linh, nét mặt hòa nhã, giọng chân thành, lịch thiệp)',
        text: 'Thay mặt chỉ huy Đại đội và đơn vị, tôi thành thật gửi lời xin lỗi sâu sắc tới hai bạn và bà con nhân dân địa phương. Chiến sĩ của tôi hoàn toàn sai. Họ đã vi phạm nghiêm trọng kỷ luật quân đội, vi phạm Luật Giao thông đường bộ. Rất may mắn là hai bạn không ai bị thương tật nặng. Về toàn bộ thiệt hại hỏng hóc của xe máy, đơn vị chúng tôi xin chịu hoàn toàn trách nhiệm bồi thường thỏa đáng cho hai bạn!'
      },
      {
        type: 'dialogue',
        character: 'taibua',
        speaker: 'Tài Búa',
        actionNote: '(Thấy sĩ quan quân đội nói năng đàng hoàng, trách nhiệm, cơn giận liền tan biến)',
        text: 'Dạ... anh Đại đội trưởng đã thẳng thắn nhận lỗi và giải quyết văn minh như vậy thì bọn em cũng xin phép không chấp nhặt nữa ạ. Nãy em bực là do mấy cậu này vừa say vừa có thái độ thách thức lồi lõm quá. Dăm ba chén rượu cúng mà làm ầm ĩ cả xóm làng. Thôi may mà người ngợm không sao. Chỉ mong anh về đơn vị giáo dục, rèn giũa lại các chiến sĩ, chứ Bộ đội Cụ Hồ ai lại uống rượu lái xe nguy hiểm thế này.'
      },
      {
        type: 'dialogue',
        character: 'linh',
        speaker: 'Linh',
        actionNote: '',
        text: 'Đúng đấy ạ, suýt chút nữa là bay mất cả hàm răng lẫn dung nhan lụa là của em rồi!'
      },
      {
        type: 'dialogue',
        character: 'lai',
        speaker: 'Thượng úy Lai',
        actionNote: '',
        text: 'Cảm ơn hai bạn đã thấu hiểu và chia sẻ. Đồng chí An! Đưa hai bạn này về doanh trại trước, lấy thông tin phương tiện để lập biên bản xử lý và tiến hành sửa chữa bồi thường.'
      },
      {
        type: 'dialogue',
        character: 'an',
        speaker: 'An',
        actionNote: '',
        text: 'Rõ! Mời hai bạn đi cùng tôi.'
      },
      {
        type: 'dialogue',
        character: 'lai',
        speaker: 'Thượng úy Lai',
        actionNote: '(Quay ngoắt lại ba chiến sĩ, ánh mắt đanh thép)',
        text: 'Còn ba đồng chí, ngay sáng mai viết bản tường trình, kiểm điểm sâu sắc rồi lên phòng gặp tôi! Đại đội sẽ tổ chức sinh hoạt toàn thể xét kỷ luật nghiêm minh từng đồng chí. Căn cứ vào tính chất vi phạm, việc có gửi thông báo về địa phương và gia đình hay không sẽ do Hội đồng kỷ luật xem xét quyết định! Các đồng chí có ý kiến gì không?!'
      },
      {
        type: 'dialogue',
        character: 'group',
        speaker: 'Sơn, Cường, Dũng',
        actionNote: '(Đồng thanh nhận tội trong ân hận)',
        text: 'Báo cáo Đại đội trưởng, chúng em đã nhận thức rõ sai phạm và xin chấp hành mọi hình thức kỷ luật ạ!'
      },
      {
        type: 'dialogue',
        character: 'lai',
        speaker: 'Thượng úy Lai',
        actionNote: '(Quay sang cảm ơn Lan với ánh mắt cảm phục)',
        text: 'Cảm ơn Lan rất nhiều nhé. May mắn có em phát hiện và báo cáo kịp thời, nếu không thì hậu quả không biết sẽ khôn lường đến mức nào. Đúng là tình quân dân cá với nước gắn bó keo sơn!'
      },
      {
        type: 'dialogue',
        character: 'lan',
        speaker: 'Lan',
        actionNote: '(Cười tươi rạng rỡ)',
        text: 'Dạ không có gì đâu anh Lai ạ. Giúp các anh nhận ra lỗi lầm để hoàn thiện bản thân cũng chính là trách nhiệm và tình cảm của đoàn viên thanh niên chúng em đối với các chiến sĩ mà!'
      },
      {
        type: 'dialogue',
        character: 'lai',
        speaker: 'Thượng úy Lai',
        actionNote: '(Dõng dạc hô lớn)',
        text: 'Tất cả chú ý! Giải tán về đơn vị!'
      }
    ]
  }
];

export const SLOGANS = [
  '📢 “VUI CÓ GIỚI HẠN – KỶ LUẬT KHÔNG CÓ NGOẠI LỆ!”',
  '🚫 “ĐÃ UỐNG RƯỢU BIA – TUYỆT ĐỐI KHÔNG ĐIỀU KHIỂN PHƯƠNG TIỆN GIAO THÔNG!”',
  '🎖️ “KỶ LUẬT GIỮ VỮNG SỨC MẠNH ĐƠN VỊ – TRÁCH NHIỆM GIỮ GÌN HÌNH ẢNH BỘ ĐỘI CỤ HỒ!”'
];
