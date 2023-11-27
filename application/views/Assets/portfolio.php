<div class="container">

<div class="section-title">
  <h2>Portfolio</h2>

</div>

<div class="row" data-aos="fade-up">
  <div class="col-lg-12 d-flex justify-content-center">
    <ul id="portfolio-flters">
      <li data-filter="*" class="filter-active">All</li>
      <li data-filter=".filter-App">App</li>
      <li data-filter=".filter-Web">Web</li>
    </ul>
  </div>
</div>

<div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
 
  <?php foreach ($data as $row) { ?>
    <div class="col-lg-4 col-md-6 portfolio-item filter-<?php echo $row['type']?>">
    <div class="portfolio-wrap">
      <img src="<?php echo base_url($row['image']) ?>" class="img-fluid" alt="">
      <div class="portfolio-links">
        <a href="<?php echo base_url($row['image']) ?>" data-gallery="portfolioGallery"
          class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
        <a href="<?php echo base_url('Welcome/details?id='.$row['id'])?>" title="More Details"><i class="bx bx-link"></i></a>
      </div>
    </div>
  </div>
    <?php }?>


</div>

</div>