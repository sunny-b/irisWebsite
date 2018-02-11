<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Iris Sprague | Designer</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<meta property="og:site_name" content="Iris Sprague | Designer">
		<meta property="og:title" content="Iris Sprague | Designer">
		<meta property="og:type" content="website">
		<link rel="stylesheet" href="css/fonts.css" type="text/css" />
		<link rel="stylesheet" href="css/allSlider.min.css">
		<script src="js/modernizr.custom.js"></script>
 		
	</head>
	
	<body class="home colorNormal">
		<div class="page">
		<?php
			require 'php/header2.php';
		?>
		<div class="moving">	
			<div class="middlecontainer" >
			  <div class="container-fluid">
			    <div class="container ">
			      <div class="row-fluid">
			        <div class="col-lg-12  col-md-12 col-sm-12">
							 <div id="myCarousel" class="carousel slide" data-ride="carousel">
			            <!-- Indicators -->
			
			            <!-- Wrapper for slides -->
			            <div class="carousel-inner" role="listbox">
			              <div class="item img-responsive active">
			                <img class="scale0" src="img/howPostersWork/38_img_gallery_HPW.jpg" alt="Responsive image">
			              </div>
			
			              <div class="item second img-responsive">
			                <img class="scale1" src="img/howPostersWork/39_img_gallery_HPW.jpg" alt="Responsive image">
			              </div>
			
			              <div class="item img-responsive">
			                <img class="scale2" src="img/howPostersWork/40_img_gallery_HPW.jpg" alt="Responsive image">
			              </div>
			
			              <div class="item third img-responsive">
			                <img class="scale3" src="img/howPostersWork/41_img_gallery_HPW.jpg" alt="Responsive image">
			              </div>
			
			              <div class="item last img-responsive">
			                <img class="scale4" src="img/howPostersWork/41_img_gallery_HPW.jpg" alt="Responsive image">
			              </div>
			              
			              <div class="accolades2">
												<a class="prev-next" id="next2" href="rediscover.php">Next:<br>Lettering &amp; Type</a>
												
												<br>
												
													<a class="prev-next" id="prev2" href="dotufo.php">Previous:<br>dotufo Type Foundry</a>
										</div>
			
			            </div>
					
					<!-- Left and right controls -->
			           	<div class="navigation-control">
				            <a class="left carousel-control" href="#myCarousel" role="button" style="cursor:w-resize" data-slide="prev">
				              <!-- <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> -->
				              <span class="sr-only">Previous</span>
				            </a>
				            <a class="right carousel-control" href="#myCarousel" role="button" style="cursor:e-resize" data-slide="next">
			            </div>	
			              <!-- <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> -->
			              <span class="sr-only">Next</span>
			            </a>
			          </div>
			          </div><!-- end col-->
			        </div><!-- end rowfluid-->
			      </div> <!-- container-->
			    </div><!-- container fluid-->
				</div><!-- visiblecontainer-->
				
				
		<div class="wrapper">
			<div class="content">	
				<div class="about">
				<h3>How Posters Work</h3>
				<h4>Editorial Design</h4>
				
				<p>How Posters Work is an exhibition being shown at the Cooper Hewitt Smithsonian Design Museum in New York and our class was tasked by <a target="_blank" href="http://www.elupton.com">Ellen Lupton</a> to create a book design for the posters to live in. I activated the space using two hanging lines for all the images and a flexible 12-column grid. The cover is constructed from the diagrams inside the book, all of which explain movement in posters. Check out the whole editorial <a target="_blank" href="https://issuu.com/spraguei1/docs/irissprague_bookdesign/1?e=15199136/10995967">here.</a></p>
				
			</div>	
			<div class="content-break"></div>
			<div class="mobileNP">
				<a class="mobileNepr" href="dotufo.php">Previous:<br>dotufo Type Foundry</a>
				<a class="mobileNepr" href="rediscover.php">Next:<br>Lettering &amp; Type</a>
			</div>
			<div class="accolades">
				<a class="next-prev" id="next" href="rediscover.php">Next:<br>Lettering &amp; Type</a>
				
				<br>
				
					<a class="next-prev" id="prev" href="dotufo.php">Previous:<br>dotufo Type Foundry</a>
			</div>
		</div>
	
				

<?php
			require 'php/overlay.php';	
					
			
		?>
	<footer>
		<?php
			require 'php/footersocial.php';
		
			require 'php/footerfixed.php';
		?>
	</footer>
	</div>
</div>
	<?php
			require 'php/scriptsCarousel.php';
		?>
	</body>
</html>