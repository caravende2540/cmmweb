exports.index = function(req, res)
{
	let content =
	{
		banner:
		[
		{
			id: 1,
			url: '//image/img-1.jpg',
			title: 'news1'
		},
		{
			id: 2,
			url: '//image/img-1.jpg',
			title: 'news2'
		}
		]
	}

	res.json(content)
}