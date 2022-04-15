let incFiles = {
	name: "Standard page",
	head: "<link rel='stylesheet' href='https://editorium.net/fs/help/hello-world/style.css'>",
	endBody: "<link href='https://editorium.net/fs/help/hello-world/owl/owl.carousel.css' rel='stylesheet' /><script src='https://editorium.net/fs/help/hello-world/owl/jquery.min.js'></script><script src='https://editorium.net/fs/help/hello-world/owl/owl.carousel.min.js'></script></script><script src='https://editorium.net/fs/help/hello-world/script.js'></script>"
}


let image = {
	html: '<img src="https://editorium.net/fs/help/hello-world/serenity.jpg" alt="image" data-em-id="image" />',
	elems: [
		{
			elemId: 'image',
			elemName: 'Image',
			elemAttrs: [
				{
					elemAttrId: 'image-link',
					elemAttrName: 'src',
				},
				{
					elemAttrId: 'classes',
					elemAttrName: 'class',
					elemAttrAlt: 'Класс',
					elemAttrLockedValue: 'image',
					elemAttrView: 'checkbox',
					elemAttrValues: [
						{
							elemAttrValueId: 'rounded',
							elemAttrValueAlt: 'С закруглением',
							elemAttrValueValue: 'image--rounded',
							elemAttrValueChecked: true
						},
						{
							elemAttrValueId: 'shadow',
							elemAttrValueAlt: 'С тенью',
							elemAttrValueValue: 'image--shadow'
						}
					]
				},
			]
		}
	]
}



let table = {
	html: '<table class="table" data-em-id="table"><thead class="table__thead" data-em-id="thead"><tr><th class="table__th" data-em-id="th"></th></tr></thead><tbody class="table__tbody"><tr class="table__tr" data-em-id="tr"><td class="table__td" data-em-id="td"></td></tr></tbody></table>',
	elems: [
		{
			elemId: 'table',
			elemName: 'Таблица'
		},
		{
			elemId: 'thead',
			elemName: 'Блок заголовка',
			elemHidden: true,
			elemCanDuplicate: false
		},
		{
			elemId: 'th',
			elemName: 'Ячейка заголовка',
			addTextComponent: true
		},
		{
			elemId: 'tr',
			elemName: 'Ряд'
		},
		{
			elemId: 'td',
			elemName: 'Ячейка',
			addTextComponent: true,
			elemAttrs: [
				{
					elemAttrId: 'classes',
					elemAttrName: 'class',
					elemAttrAlt: 'Класс',
					elemAttrLockedValue: 'table__td',
					elemAttrView: 'checkbox',
					elemAttrValues: [
						{
							elemAttrValueId: 'green',
							elemAttrValueAlt: 'Зелёная ячейка',
							elemAttrValueValue: 'table__td--green',
						},
					]
				},
			]
		},
	]
}



let header = {
	html: '<h1 class="header" data-em-id="header"></h1>',
	elems: [
		{
			elemId: 'header',
			elemName: 'Заголовок',
			addTextComponent: true,
			elemTags: {

			},
		}
	]
}


let link = {
	html: '<a href="" data-em-id="link"></a>',
	elems: [
		{
			elemId: 'link',
			elemName: 'Ссылка',
			addTextComponent: true,
			elemAttrs: [
				{
					elemAttrId: 'href',
					elemAttrName: 'href',
					elemAttrAlt: 'Адрес ссылки'
				},
			]
		}
	]
}

let gallery = {
	html: '<div class="owl-carousel" data-em-id="gallery"><img src="" data-em-id="image" /></div>',
	elems: [
		{
			elemId: 'gallery',
			elemName: 'Галерея'
		},
		{
			elemId: 'image',
			elemName: 'Изображение',
			elemAttrs: [
				{
					elemAttrId: 'src',
					elemAttrName: 'src',
					elemAttrAlt: 'Адрес ссылки'
				},
			]
		}
	]
}