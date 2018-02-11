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
			                <img class="scale0" src="img/theoSuper/68_img_gallery_theo_1.gif" alt="Responsive image">
			              </div>
			              
			              <div class="item second img-responsive">
			                <video controls muted>
			                	<source src="img/theoSuper/horizontalfinal_2_Converted_.mp4"
			                </video>
			              </div>
			
			              <div class="item img-responsive">
			                <img class="scale1" src="img/theoSuper/70_img_gallery_theo_2.jpg" alt="Responsive image">
			              </div>
			
			              <div class="item img-responsive">
			                <img class="scale2" src="img/theoSuper/71_img_gallery_the_3.gif" alt="Responsive image">
			              </div>
			
			              <div class="item img-responsive">
			                <img class="scale3" src="img/theoSuper/73_img_gallery_theo_4.png" alt="Responsive image">
			              </div>
			              
			              <div class="item img-responsive">
			                <img class="scale3" src="img/theoSuper/72_img_gallery_theo_5.jpg" alt="Responsive image">
			              </div>
			
			              <div class="item third img-responsive">
			                <img class="scale4" src="img/theoSuper/69_img_gallery_theo_6.jpg" alt="Responsive image">
			              </div>
			              
			              <div class="item last img-responsive">
			                <img class="scale4" src="img/theoSuper/69_img_gallery_theo_6.jpg" alt="Responsive image">
			              </div>
			              <div class="accolades2">
												<a class="prev-next" id="next2" href="shake-law.php">Next:<br>Shake Law</a>
												
												<br>
												
													<a class="prev-next" id="prev2" href="zaha-hadid.php">Previous:<br>Zaha Hadid</a>
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
				<h3>Theo Superfamily</h3>
				<h4>Type Design</h4>
				
				<p>Theo Superfamily is an exploration into how typographical superfamilies are structured. I wanted to see how one skeleton can be expanded into four completely different styles. Theo encompasses a Humanist sans, a Grotesk Sans, a Text Serif, and a Display Italian, which is a reverse stress contrast typeface. Theo is meant for print and digital publishing and uses a narrower build and high x-height. For my thesis exhibition, I combined forces with Shiva Nallaperumal to create <a target="_blank" href="rope-type-foundry.php">Rope Type Foundry.</a></p> 
				<p>Currently Theo, the typeface, is under devlepment, but you can check out the end result of my thesis in collaboration with Shiva <a target="_blank" href="http://thesis2015.micadesign.org/ropetype/">here(open me in safari!).</a></p>
				<p>Supervised by Tal Leming of <a target="_blank" href="https://typesupply.com/">Type Supply.</a></p>
			</div>	
			<div class="content-break"></div>
			<div class="mobileNP">
				<a class="mobileNepr" href="zaha-hadid.php">Previous:<br>Zaha Hadid</a>
				<a class="mobileNepr" href="shake-law.php">Next:<br>Shake Law</a>
			</div>
			<div class="accolades">
				<a class="next-prev" id="next" href="shake-law.php">Next:<br>Shake Law</a>
				
				<br>
				
					<a class="next-prev" id="prev" href="zaha-hadid.php">Previous:<br>Zaha Hadid</a>
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