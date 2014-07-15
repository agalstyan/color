<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<title>Цвета</title>

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="/css/bootstrap.min.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="/css/bootstrap-theme.min.css">


	<script src="/js/jquery-2.1.1.min.js" type="text/javascript"></script>
	<!-- Latest compiled and minified JavaScript -->
	<script src="/js/bootstrap.min.js" type="text/javascript"></script>

	<script src="/js/ColorSelect.js" type="text/javascript"></script>
	<script type="text/javascript">
		$(function(){
			var colorSelect = new ColorSelect({
				selectors: {
					container: '#color-container',
					checkButtons: '#color-options button',
					oneMoreTimeButton: '#one-more-button',
					counter: '#counter',
					maxCounter: '#max-counter'
				}
			});
		});
	</script>
</head>

<body>

<div class="container">

	<div class="jumbotron">
		<h1>Угадайте тон</h1>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<div id="color-container" data-test="12" style="width: 300px; height: 300px; background: red"></div>
		</div>
		<div class="col-lg-7">
			<form id="color-options" action="">
				<div class="col-lg-4">
					<div class="form-group">
						<button data-sector="0" class="btn btn-default">Желтый</button>
					</div>
					<div class="form-group">
						<button data-sector="1" class="btn btn-default">Желто-оранжевый</button>
					</div>
					<div class="form-group">
						<button data-sector="2" class="btn btn-default">Оранжевый</button>
					</div>
					<div class="form-group">
						<button data-sector="3" class="btn btn-default">Оранжево-красный</button>
					</div>
					<div class="form-group">
						<button data-sector="4" class="btn btn-default">Красный</button>
					</div>
					<div class="form-group">
						<button data-sector="5" class="btn btn-default">Красно-фиолетовый</button>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="form-group">
						<button data-sector="6" class="btn btn-default">Фиолетовый</button>
					</div><div class="form-group">
						<button data-sector="7" class="btn btn-default">Фиолетово-синий</button>
					</div>
					<div class="form-group">
						<button data-sector="8" class="btn btn-default">Синий</button>
					</div>
					<div class="form-group">
						<button data-sector="9" class="btn btn-default">Сине-зеленый</button>
					</div>
					<div class="form-group">
						<button data-sector="10" class="btn btn-default">Зеленый</button>
					</div>
					<div class="form-group">
						<button data-sector="11" class="btn btn-default">Зелено-желтый</button>
					</div>
				</div>
			</form>
		</div>
		<div class="col-lg-1">
			<h3 id="counter">0</h3>
			<h3 id="max-counter">0</h3>
		</div>
	</div>

	<div class="footer">
	</div>

</div> <!-- /container -->

</body>
</html>