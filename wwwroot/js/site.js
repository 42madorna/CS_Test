// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$('input[type="button"]').on('click', (e) => {
	e.preventDefault()
	switch ($(e.target).val()) {
		case 'AC':
			$('input[type="text"]').val('')
			break
		case '=':
			try {
				$('input[type="text"]').val(eval($('input[type="text"]').val()))
			} catch (_e) {
				$('input[type="text"]').val('Error')
			}
			break
		default:
			$('input[type="text"]').val($('input[type="text"]').val() + $(e.target).val())
			break
	}
})
