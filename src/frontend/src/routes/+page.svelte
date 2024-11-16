<script lang="ts">
    import { authSignedInStore } from "$lib/derived/auth.derived";
import LogoIcon from "$lib/icons/logo-icon.svelte";
    import { authStore, type AuthSignInParams } from "$lib/stores/auth-store";
import Layout from "./Layout.svelte";


    function handleLogin() {
        let params: AuthSignInParams = {
        domain: import.meta.env.VITE_AUTH_PROVIDER_URL,
        };
        authStore.signIn(params);
    }
</script>
<Layout>    
    <div class="p-4">
        <div class="flex flex-row items-center">
            <p class="text-2xl">Coming soon.</p>
        </div>
    </div>
</Layout>
