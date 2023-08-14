<script setup lang="ts">
import {MenuUnfoldOutlined, MenuFoldOutlined} from "@ant-design/icons-vue";
import {computed, onBeforeMount, onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const route = useRoute();
const selectedKeys = ref<any[]>(["/home/"]);
const collapsed = ref<boolean>(false);
const openKeys = ref<string[]>([]);


const dataSliderBar = ref<any[]>([
  {
    key: "/home",
    requiredRole: false,
    name: "Home",
    children: [],
  },
  {
    subKey: "/DashBoardManagement",
    name: "DashBoardManagement",
    children: [
      {
        key: "",
        name: "내부직원 계정관리",
      },
      {
        key: "/bgbg",
        name: "외부 계정관리",
      },
    ],
  },
]);

const handleClickSideBar = (e) => {
  router.push(e.key);
};

const logout = () => {
  localStorage.removeItem("token");
  router.push("/");
};


const checkSelectedSidleBar = () => {
  if (route.meta.child) {
    selectedKeys.value = [
      route?.fullPath?.substring(0, route?.fullPath?.lastIndexOf("/")),
    ];
    openKeys.value = [route?.fullPath?.split("/").slice(0, 3).join("/")];
  } else {
    selectedKeys.value = [route?.fullPath];
    openKeys.value = [
      route?.fullPath?.substring(0, route?.fullPath?.lastIndexOf("/")),
    ];
  }
};

onMounted(() => {
  checkSelectedSidleBar();
});

watch(
    () => route.fullPath,
    () => {
      checkSelectedSidleBar();
    }
);

</script>

<template>
  <a-layout id="admin_layout" style="min-height: 100vh; display: flex">
    <a-layout-sider
        class="bordered border-r-[1px] border-[#dcdcdc66]"
        theme="light"
        width="240"
        v-model:collapsed="collapsed"
        :trigger="null"
        collapsible
        breakpoint="lg"
        collapsed-width="0"
        @breakpoint="onBreakpoint"
    >
      <div class="logo flex max-w-[200px] p-[16px]">
        <router-link
            to="/home/"
            class="flex h-[32px] w-full items-center justify-center gap-[5px]"
        >
          <div v-if="!collapsed" class="h-[2rem] overflow-hidden">
            <img
                src="@/assets/images/bss-logo-admin.svg"
                alt="logo"
                class="h-full w-full object-contain"
            />
          </div>
        </router-link>
      </div>

      <a-menu
          id="menu"
          class="bg-[#1D223E]"
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          mode="inline"
          @click="handleClickSideBar"
      >
        <template v-for="item in dataSliderBar">

          <div
              class="bg-[#1D223E] text-[#FFFFFF]"
          >
            <a-menu-item v-if="!item.children.length" :key="item.key">
              <span>{{ item.name }}</span>
            </a-menu-item>
            <a-sub-menu v-else :key="item.subKey">
              <template #title>{{ item.name }}</template>
              <a-menu-item
                  class="text-[#FFFFFF]"
                  v-for="childItem in item.children"
                  :key="childItem.key"
              >
                {{ childItem.name }}
              </a-menu-item>
            </a-sub-menu>
          </div>

        </template>
      </a-menu>
    </a-layout-sider>

    <a-layout class="admin_layout_content">
      <a-layout-header
          class="flex items-center justify-between"
          style="background: #f9fafe; padding: 0"
      >
        <div class="close_open_nav ml-[15px]">
          <menu-unfold-outlined
              v-if="collapsed"
              class="trigger"
              @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
              v-else
              class="trigger"
              @click="() => (collapsed = !collapsed)"
          />
        </div>

        <div class="px-[1rem]">
          <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
              <div class="h-[30px] w-[30px] overflow-hidden rounded-full">
                <img
                    src="https://i.pinimg.com/236x/a3/80/4b/a3804bc50f60557bd48f7bcc53df24ce.jpg"
                    alt="logo"
                    class=" object-cover"
                />
              </div>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <div>프로필</div>
                </a-menu-item>
                <a-menu-item>
                  <div @click="logout">로그아웃</div>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </a-layout-header>

      <a-layout-content
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style>
.admin_layout_content {
  width: 100%;
}


.ant-layout-sider-children {
  background-color: #1D223E !important;
}

.ant-page-header {
  height: 100%;
}

.ant-menu-title-content {
  color: #ffffff !important;
}

.ant-skeleton-element .ant-skeleton-image {
  width: 100%;
  height: 100%;
}

:where(.css-eq3tly).ant-menu-light .ant-menu-item-selected {
  background-color: #1677ff;
}

.ant-menu-item {
  background-color: transparent; /* Nền trong suốt */
}

/* Nền khi menu item được kích hoạt */
.ant-menu-item-selected {
  background-color: #312e81 !important;
  color: #FFFFFF !important; /* Màu sắc chữ khi kích hoạt */
}

</style>
