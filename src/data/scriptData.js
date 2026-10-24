export const CHARACTERS = [
  {
    id: 'son',
    name: '1. Thái Sơn',
    role: 'Chiến sĩ',
    avatar: 'S',
    tagClass: 'char-son',
    borderColor: '#3b82f6',
    tagBg: '#dbeafe',
    tagText: '#1d4ed8',
    desc: 'Chiến sĩ năm thứ 2, “đầu sỏ” vụ trốn trại.'
  },
  {
    id: 'cuong',
    name: '2. Cường',
    role: 'Chiến sĩ',
    avatar: 'C',
    tagClass: 'char-cuong',
    borderColor: '#22c55e',
    tagBg: '#dcfce7',
    tagText: '#15803d',
    desc: 'Chiến sĩ, tính nhát gan nhưng hay nói đạo lý.'
  },
  {
    id: 'dung',
    name: '3. Dũng',
    role: 'Chiến sĩ',
    avatar: 'D',
    tagClass: 'char-dung',
    borderColor: '#f97316',
    tagBg: '#ffedd5',
    tagText: '#c2410c',
    desc: 'Chiến sĩ, "ma men" chính hiệu, uống vào là sừng sộ.'
  },
  {
    id: 'nhung',
    name: '4. Quỳnh Trang',
    role: 'Chủ quán rượu Chị Nhung',
    avatar: 'N',
    tagClass: 'char-nhung',
    borderColor: '#ec4899',
    tagBg: '#fce7f3',
    tagText: '#be185d',
    desc: 'Chủ quán rượu Chị Nhung, xởi lởi, hám lợi nhưng sợ rắc rối.'
  },
  {
    id: 'taibua',
    name: '5. Tài Búa',
    role: 'Thanh niên địa phương',
    avatar: 'T',
    tagClass: 'char-taibua',
    borderColor: '#ef4444',
    tagBg: '#fee2e2',
    tagText: '#b91c1c',
    desc: 'Thanh niên địa phương, boy xăm trổ, tính tình nóng nảy.'
  },
  {
    id: 'linh',
    name: '6. Linh',
    role: 'Bạn gái Tài Búa',
    avatar: 'L',
    tagClass: 'char-linh',
    borderColor: '#a855f7',
    tagBg: '#f3e8ff',
    tagText: '#7e22ce',
    desc: 'Bạn gái Tài Búa, đỏ đỏ chảnh chảnh.'
  },
  {
    id: 'lan',
    name: '7. Lan',
    role: 'Cô gái địa phương',
    avatar: 'L',
    tagClass: 'char-lan',
    borderColor: '#06b6d4',
    tagBg: '#cffafe',
    tagText: '#0e7490',
    desc: 'Cô gái địa phương, đơn vị kết nghĩa với trung đoàn, thông minh, nhanh trí.'
  },
  {
    id: 'lai',
    name: '8. Thượng úy Lai',
    role: 'Đại đội trưởng',
    avatar: 'L',
    tagClass: 'char-lai',
    borderColor: '#eab308',
    tagBg: '#fef08a',
    tagText: '#854d0e',
    desc: 'Đại đội trưởng, nghiêm khắc nhưng thương chiến sĩ.'
  }
];

export const SCENES = [
  {
    id: 'canh-1',
    number: 'CẢNH 1',
    title: 'LÉN VƯỢT TƯỜNG RA NGOÀI DOANH TRẠI',
    meta: '(Chiều tối – Khu vực tường rào doanh trại)',
    items: [
      {
        type: 'stage-dir',
        content: '(Sân khấu: Sơn, Cường, Dũng đi rón rén, liên tục ngó trước nhìn sau.)'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '(Hạ giọng)',
        text: 'Các đồng chí, mục tiêu tối nay: Quán Chị Nhung!'
      },
      {
        type: 'dialogue',
        character: 'cuong',
        speaker: 'Cường',
        actionNote: '',
        text: 'Tôi thấy kế hoạch này hơi nguy hiểm… Lỡ bị phát hiện thì sao?'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '',
        text: 'Yên tâm! Giờ này cán bộ đang họp. Kế hoạch này tôi tính toán kỹ lắm rồi!'
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
        actionNote: '(Ưỡn ngực)',
        text: 'Tôi! Đặc công Dũng xuất trận!'
      },
      {
        type: 'stage-dir',
        content: '(Dũng lấy đà trèo lên nhưng vừa bám tường đã trượt chân ngã "bịch".)'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '',
        text: 'Ái da!'
      },
      {
        type: 'stage-dir',
        content: '(Cả nhóm cười lớn.)'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '',
        text: 'Không nói nhiều! Hỗ trợ tôi!'
      },
      {
        type: 'stage-dir',
        content: '(Cả nhóm đẩy kéo nhau leo qua tường, người kéo người, loạng choạng.)'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '',
        text: 'ok Anh em! Đã vượt rào thành công!'
      },
      {
        type: 'dialogue',
        character: 'cuong',
        speaker: 'Cường',
        actionNote: '(Phủi quần áo)',
        text: 'Mục tiêu phía trước: Quán Chị Nhung! Tiến lên!'
      },
      {
        type: 'stage-dir',
        content: '(Cả nhóm hớn hở chạy khỏi sân khấu.)'
      }
    ]
  },
  {
    id: 'canh-2',
    number: 'CẢNH 2',
    title: 'QUÁN CHỊ NHUNG',
    meta: '(Đêm - Trong quán)',
    items: [
      {
        type: 'stage-dir',
        content: '(Sân khấu bố trí một bộ bàn ghế nhựa, Sơn, Cường, Dũng hớn hở đi vào quán.)'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '(Vừa bước vào vừa hát)',
        text: '“Cuộc đời vẫn đẹp sao, tình yêu vẫn đẹp sao …” Chúng em chào Chị Nhung chủ quán?'
      },
      {
        type: 'dialogue',
        character: 'nhung',
        speaker: 'Chị Nhung',
        actionNote: '(Từ trong đi ra, vội vàng lau bàn)',
        text: 'Ai gọi đấy? Ơ, mấy chú bộ đội đẹp trai hôm nay lại ghé quán chị à?'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '',
        text: 'Chị Nhung ơi, nghe danh chị lâu rồi, hôm nay gặp ngoài đời còn trẻ hơn lời đồn!'
      },
      {
        type: 'dialogue',
        character: 'nhung',
        speaker: 'Chị Nhung',
        actionNote: '(Cười)',
        text: 'Thôi đi chú! Miệng ngọt thế này chắc xin khuyến mãi đây mà! Nói trước nhé, quán chị không cho nợ đâu!'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '',
        text: 'Chị yên tâm! Chúng em ăn uống văn minh. Không có nợ đâu.'
      },
      {
        type: 'stage-dir',
        content: '(Cả nhóm ngồi xuống bàn.)'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '',
        text: 'Thôi Chị Nhung, lên món đi, hôm nay anh em quyết tâm… tới bến!'
      },
      {
        type: 'dialogue',
        character: 'nhung',
        speaker: 'Chị Nhung vừa bê vừa nói',
        actionNote: '',
        text: 'Đây, đây… Rượu mồi thơm ngon của các thượng đế đây.'
      },
      {
        type: 'stage-dir',
        content: 'Bê chai rượu, ly, ảnh đĩa thịt chó, thịt gà ra bàn.'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '(Khà một tiếng)',
        text: 'Rượu Chị Nhung nấu có khác, uống đến đâu là biết đến đó liền ak!'
      },
      {
        type: 'dialogue',
        character: 'cuong',
        speaker: 'Cường',
        actionNote: '(Nhìn quanh lo lắng)',
        text: 'Nhỏ nhỏ cái mồm thôi ông tướng! Trốn ra ngoài doanh trại mà ông làm như đi trẩy hội. Đại đội trưởng mà biết thì tiêu 1 đời hoa, nát 3 đời cỏ đấy!'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '(Mặt đỏ gay, ngà ngà say)',
        text: 'Sợ… sợ cái gì! Đại đội trưởng giờ này đang ôm mớ sổ sách đăng ký kế hoạch tuần kia kìa, thời gian đâu mà đi kiểm tra. Lâu lâu mới "vượt biên" thành công, phải xõa! Tới bến đi chú! Chị Nhung ơi, cho thêm cút nữa!'
      },
      {
        type: 'dialogue',
        character: 'nhung',
        speaker: 'Chị Nhung',
        actionNote: '(Cầm chai rượu chạy ra, cười toe toét)',
        text: 'Có ngay, có ngay mấy chú bộ đội đẹp trai. Ăn vụng thì phải biết chùi mép, uống nhanh nhanh rồi về kẻo đơn vị kiểm quân số nhé. Nhà bao việc!'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '',
        text: 'Chị không phải lo đâu, bọn em tính cả rồi. Nào anh em mình cùng nâng ly cho kế hoạch thành công cái nào.'
      },
      {
        type: 'dialogue',
        character: 'group',
        speaker: 'Cả nhóm',
        actionNote: 'Nâng ly, chụm tay vào giữa:',
        text: 'Hôm nay. Vui…'
      },
      {
        type: 'stage-dir',
        content: '(Cụng ly, uống xong cùng xuýt xoa)'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '',
        text: 'Ăn uống no say rồi, giờ bọn mình tính tăng 2 karaoke chút nhỉ. Tôi ra đây thuê cái xe máy 3 anh mình đi.'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '',
        text: 'Anh em, yên tâm, tôi tinh nhất vùng. Một xe ba, tôi đèo Cường với Dũng.'
      },
      {
        type: 'dialogue',
        character: 'cuong',
        speaker: 'Cường',
        actionNote: '',
        text: 'Xe ba á? Gặp cơ động là ăn cám đấy.'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '(Đập bàn)',
        text: 'Cơ động nào tầm này! Đi! Lên xe! Ta là chúa tể tốc độ!'
      },
      {
        type: 'stage-dir',
        content: 'Sơn vào lấy mô hình đầu xe máy ra sân khấu.'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '',
        text: 'Anh em lên xe. Let’s Go…'
      }
    ]
  },
  {
    id: 'canh-3',
    number: 'CẢNH 3',
    title: 'TRÊN ĐƯỜNG GIAO THÔNG',
    meta: '(Đêm - Ngoài đường)',
    items: [
      {
        type: 'stage-dir',
        content: '(Tiếng động cơ xe máy kêu "Bành bành… bành". Sơn, Cường, Dũng ôm nhau trên một chiếc xe máy. Dũng ngồi sau hát nghêu ngao. Phía ngược lại, Tài Búa đang đèo Linh bằng xe máy).'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '',
        text: '"Đời mình là một khúc quân hành… ái chà chà…"'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '(Lảo đảo tay lái)',
        text: 'Ê ê, ae xem trình đung đưa đánh võng của tôi nha…'
      },
      {
        type: 'dialogue',
        character: 'taibua',
        speaker: 'Tài Búa',
        actionNote: '(Nói với Linh)',
        text: 'Nay đường vắng, để anh thể hiện tuyệt chiêu đi xe 1 bánh cho em xem nhé.'
      },
      {
        type: 'stage-dir',
        content: '(ẦM!!! Hai bên va chạm nhẹ, hai xe cùng đổ. Cả bọn ngã nhào ra sân khấu).'
      },
      {
        type: 'dialogue',
        character: 'linh',
        speaker: 'Linh',
        actionNote: '(Hét lên)',
        text: 'Ối giời ơi! Mặt mũi lụa là của tôi! Tài Búa ơi là Tài Búa, chúng nó đâm mình kìa!'
      },
      {
        type: 'dialogue',
        character: 'taibua',
        speaker: 'Tài Búa',
        actionNote: '(Bật dậy, hùng hổ).',
        text: 'Đậu xanh cái bọn này. Mắt mũi sinh ra cho đủ bộ phận hả? Đường của mỗi nhà các bố à? Đi xe kiểu gì mà kẹp ba, lạng lách thế kia? Có biết con xe này anh mới độ mất mấy củ không?'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '(Lồm cồm bò dậy)',
        text: 'Ơ cái anh này buồn cười, đường nhà anh mua à? Tôi đang đi đúng… đúng quỹ đạo hình SIN của tôi nhé!'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '(Sừng sộ, chỉ tay vào mặt Tài Búa)',
        text: 'Thằng kia… mày bảo ai không có mắt? Biết bọn tao là… là ai không?'
      },
      {
        type: 'dialogue',
        character: 'cuong',
        speaker: 'Cường',
        actionNote: '(Hốt hoảng, kéo áo Dũng)',
        text: 'Suỵt! Đừng nói mình là bộ đội! Mất mặt quân đội lắm ông ơi!'
      },
      {
        type: 'dialogue',
        character: 'taibua',
        speaker: 'Tài Búa',
        actionNote: '(Nhìn tóc ba phân)',
        text: 'À, nhìn tóc tai là biết mấy ông lính trốn trại rồi. Bộ đội mà đi đứng thế à? Say bét nhè ra rồi kia! Hôm nay không đền tiền con xe này thì đừng hòng về trại!'
      },
      {
        type: 'dialogue',
        character: 'linh',
        speaker: 'Linh',
        actionNote: '',
        text: 'Đúng đấy! Đồ mấy ông say xỉn, tính bắt nạt dân lành hả? Tôi gọi công an xã bây giờ!'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '(Rượu vào lời ra)',
        text: 'Thách đấy! Gọi đi! Ngon thì nhào vô!'
      },
      {
        type: 'stage-dir',
        content: '(Hai bên lao vào giằng co, đẩy qua đẩy lại. Cường cố can ngăn nhưng bất thành. Sơn và Tài Búa bắt đầu túm áo nhau).'
      }
    ]
  },
  {
    id: 'canh-4',
    number: 'CẢNH 4',
    title: 'CỨU TINH XUẤT HIỆN',
    meta: '',
    items: [
      {
        type: 'stage-dir',
        content: '(Lan – mặc trang phục thanh niên tình nguyện hoặc áo thun giản dị – đi ngang qua, thấy đám đông liền chạy lại).'
      },
      {
        type: 'dialogue',
        character: 'lan',
        speaker: 'Lan',
        actionNote: '',
        text: 'Ơ kìa, có chuyện gì thế? Dừng tay lại các anh ơi! (Nhìn kỹ) Ủa… anh Sơn, anh Dũng đơn vị kết nghĩa bên Trung đoàn đúng không? Sao lại ra nông nỗi này?'
      },
      {
        type: 'dialogue',
        character: 'son',
        speaker: 'Sơn',
        actionNote: '(Giật mình, tỉnh rượu một nửa)',
        text: 'Ơ… Lan… Lan kết nghĩa đoàn xã đấy à? Chết tôi rồi…'
      },
      {
        type: 'dialogue',
        character: 'taibua',
        speaker: 'Tài Búa',
        actionNote: '',
        text: 'Lan ơi, em quen mấy ông này à? Mấy ông này say rượu đâm vào xe anh, còn định giở thói côn đồ này!'
      },
      {
        type: 'dialogue',
        character: 'lan',
        speaker: 'Lan',
        actionNote: '(Nhìn ba chiến sĩ nồng nặc mùi rượu, hiểu ra vấn đề)',
        text: 'Các anh gan to bằng trời rồi. Trốn trại đi uống rượu, lại còn gây tai nạn giao thông, gây gổ với dân!'
      },
      {
        type: 'dialogue',
        character: 'dung',
        speaker: 'Dũng',
        actionNote: '(Vẫn cố chấp)',
        text: 'Nó… nó đòi tiền bọn anh trước…'
      },
      {
        type: 'dialogue',
        character: 'lan',
        speaker: 'Lan',
        actionNote: '',
        text: 'Các anh im lặng ngay! Giờ em không đôi co nữa. Em phải báo cáo chuyện này cho đơn vị các a để còn giải quyết mới được.'
      },
      {
        type: 'stage-dir',
        content: '(Lan rút điện thoại ra bấm máy nhanh chóng).'
      },
      {
        type: 'dialogue',
        character: 'cuong',
        speaker: 'Cường',
        actionNote: '(Mếu máo)',
        text: 'Thôi xong, quả này về chăn kiến rồi các ông ơi…'
      },
      {
        type: 'dialogue',
        character: 'lan',
        speaker: 'Lan',
        actionNote: '(Nói vào điện thoại)',
        text: 'Alo, dạ báo cáo Thượng úy Lai ạ! Em Lan bên Đoàn xã kết nghĩa đây ạ. Hiện tại ở ngã ba gần quán Chị Nhung, có 3 chiến sĩ đơn vị mình gặp sự cố giao thông và đang có biểu hiện say xỉn, mất trật tự ạ… Dạ, vâng, em đợi anh.'
      },
      {
        type: 'dialogue',
        character: 'group',
        speaker: 'Sơn, Cường, Dũng',
        actionNote: '(Đồng thanh, mặt cắt không còn giọt máu)',
        text: 'Đại… Đại đội trưởng Lai?'
      }
    ]
  },
  {
    id: 'canh-5',
    number: 'CẢNH 5',
    title: 'SỰ NGHIÊM MINH VÀ BÀI HỌC',
    meta: '',
    items: [
      {
        type: 'stage-dir',
        content: '(Chỉ 30 giây sau, tiếng còi "Tuýt! Tuýt!" vang lên. Thượng úy Lai xuất hiện cùng chiến sĩ An đi phía sau. Mặt Thượng úy Lai nghiêm nghị, uy nghiêm).'
      },
      {
        type: 'dialogue',
        character: 'an',
        speaker: 'An',
        actionNote: '(Nói nhỏ)',
        text: 'Báo cáo Đại đội trưởng, chính là họ ạ.'
      },
      {
        type: 'dialogue',
        character: 'group',
        speaker: 'Sơn, Cường, Dũng',
        actionNote: '(Bật chế độ phản xạ tự nhiên, đứng nghiêm, giơ tay chào dù áo quần xộc xệch)',
        text: 'Báo cáo Đại đội trưởng!'
      },
      {
        type: 'dialogue',
        character: 'lai',
        speaker: 'Thượng úy Lai',
        actionNote: '(Nhìn một lượt từ đầu đến chân)',
        text: 'Nghiêm chỉnh gớm nhỉ! Các đồng chí giỏi lắm! Tiệc rượu ngon không? Xe máy phóng có mượt không?'
      },
      {
        type: 'stage-dir',
        content: '(Ba chiến sĩ cúi đầu im lặng, run rẩy).'
      },
      {
        type: 'dialogue',
        character: 'lai',
        speaker: 'Thượng úy Lai',
        actionNote: '(Quay sang Tài Búa và Linh, đổi giọng ôn tồn, lịch sự)',
        text: 'Thay mặt chỉ huy đơn vị, tôi thành thật xin lỗi hai bạn và bà con địa phương. Chiến sĩ của tôi sai hoàn toàn. Họ đã vi phạm kỷ luật quân đội, vi phạm Luật giao thông đường bộ. Rất may là hai bạn không ai bị thương nghiêm trọng. Về thiệt hại của xe máy, đơn vị chúng tôi sẽ chịu trách nhiệm bồi thường thỏa đáng cho hai bạn.'
      },
      {
        type: 'dialogue',
        character: 'taibua',
        speaker: 'Tài Búa',
        actionNote: '(Thấy sĩ quan nghiêm túc và biết điều, hạ hỏa)',
        text: 'Dạ… anh đại đội trưởng đã nói thế thì bọn em cũng không chấp nhặt nữa. Tại em thấy mấy cậu này thái độ lồi lõm quá. Dăm ba ly rượu cúng mà ồn ào quá đi. May là người không sao. Chỉ mong các anh giáo dục lại các đồng chí này, bộ đội ai lại uống rượu lái xe thế này, nguy hiểm quá.'
      },
      {
        type: 'dialogue',
        character: 'linh',
        speaker: 'Linh',
        actionNote: '',
        text: 'Đúng đấy ạ, suýt chút nữa là hỏng hết cả dung nhan của em rồi.'
      },
      {
        type: 'dialogue',
        character: 'lai',
        speaker: 'Thượng úy Lai',
        actionNote: '',
        text: 'Cảm ơn hai bạn đã thấu hiểu. Đ/c An! Đưa hai bạn này về doanh trại trước, lập biên bản vi phạm kỷ luật.'
      },
      {
        type: 'dialogue',
        character: 'an',
        speaker: 'An',
        actionNote: '',
        text: 'Rõ!'
      },
      {
        type: 'dialogue',
        character: 'lai',
        speaker: 'Thượng úy Lai',
        actionNote: '(Quay sang ba chiến sĩ)',
        text: 'Còn ba đồng chí, ngày mai viết bản kiểm điểm, tường trình sau đó qua gặp tôi. Đại đội sẽ tiến hành sinh hoạt xét kỷ luật các đồng chí, căn cứ vào tình hình cụ thể, có gọi điện thông báo cho người nhà hay không thì còn để xem xét. Các đồng chí có ý kiến gì không?'
      },
      {
        type: 'dialogue',
        character: 'group',
        speaker: 'Sơn, Cường, Dũng',
        actionNote: '(Đồng thanh)',
        text: 'Báo cáo, chúng e xin chấp hành ạ!'
      },
      {
        type: 'dialogue',
        character: 'lai',
        speaker: 'Thượng úy Lai',
        actionNote: '(Quay sang cảm ơn Lan)',
        text: 'Cảm ơn Lan nhé. May có em thông báo kịp thời, không thì không biết chuyện gì xảy ra. Đúng là tình quân dân như cá với nước.'
      },
      {
        type: 'dialogue',
        character: 'lan',
        speaker: 'Lan',
        actionNote: '(Cười tươi)',
        text: 'Dạ không có gì anh ạ. Giúp các anh sửa sai cũng là trách nhiệm của tụi em mà.'
      },
      {
        type: 'dialogue',
        character: 'lai',
        speaker: 'Thượng úy Lai',
        actionNote: '(Hét lớn)',
        text: 'Tất cả! Giải tán về đơn vị!'
      },
      {
        type: 'stage-dir',
        content: 'Thông điệp: (Thượng úy Lai bước lên phía trước, các nhân vật đứng thành hàng phía sau)'
      },
      {
        type: 'dialogue',
        character: 'lai',
        speaker: 'Thượng úy Lai',
        actionNote: '',
        text: 'Một phút ham vui có thể đổi lấy nhiều ngày ân hận. Một lần buông lỏng kỷ luật có thể làm ảnh hưởng đến danh dự bản thân, tập thể và hình ảnh người quân nhân.'
      },
      {
        type: 'stage-dir',
        content: 'Tất cả nhân vật cùng bước lên, đồng thanh:'
      },
      {
        type: 'dialogue',
        character: 'group',
        speaker: 'Tất cả nhân vật cùng bước lên, đồng thanh',
        actionNote: '',
        text: '“Vui có giới hạn – kỷ luật không có ngoại lệ!”\n“Đã uống rượu bia – không điều khiển phương tiện giao thông!”\n“Kỷ luật giữ vững sức mạnh đơn vị, trách nhiệm giữ gìn hình ảnh Bộ đội Cụ Hồ!”'
      },
      {
        type: 'stage-dir',
        content: '(Cúi chào khán giả)'
      }
    ]
  }
];

export const SLOGANS = [
  '“Vui có giới hạn – kỷ luật không có ngoại lệ!”',
  '“Đã uống rượu bia – không điều khiển phương tiện giao thông!”',
  '“Kỷ luật giữ vững sức mạnh đơn vị, trách nhiệm giữ gìn hình ảnh Bộ đội Cụ Hồ!”'
];
