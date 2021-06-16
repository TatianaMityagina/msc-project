<template>
  <section class="fence-gallary">
    <div class="fence-gallary__container">
      <img alt="Photo" class="fence-gallary__image"
           height="400" src="../../assets/img/fence-gallary/photo-1@1x.jpg" srcset="../../assets/img/fence-gallary/photo-1@2x.jpg" width="400">
      <img alt="Photo" class="fence-gallary__image"
           height="400" src="../../assets/img/fence-gallary/photo-2@1x.jpg" srcset="../../assets/img/fence-gallary/photo-2@2x.jpg" width="400">
      <img alt="Photo" class="fence-gallary__image"
           height="400" src="../../assets/img/fence-gallary/photo-3@1x.jpg" srcset="../../assets/img/fence-gallary/photo-3@2x.jpg" width="400">
    </div>
  </section>
</template>

<script>
export default {
  name: 'FenceGallary'
}
</script>

<style lang="scss" scoped>
.fence-gallary {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 120px 40px;
}

.fence-gallary__container {
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
}

.fence-gallary__image {
  border-radius: 12px
}

@include desktop-small {
  .fence-gallary {
    padding: 120px 40px 133px;
  }

  .fence-gallary__image {
    width: 374px;
    height: 374px;
  }
}

@include tablet-large {
  .fence-gallary {
    padding: 100px 40px;
  }

  .fence-gallary__container {
    max-width: 688px;
  }

  .fence-gallary__image {
    width: 214px;
    height: 214px;
  }
}

@include mobile {
  .fence-gallary {
    padding: 30px 15px 60px;
  }

  .fence-gallary__container {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 100%;
  }

  .fence-gallary__image {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
